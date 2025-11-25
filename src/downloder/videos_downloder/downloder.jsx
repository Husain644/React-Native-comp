import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import RNFS from 'react-native-fs';

const CHUNK_SIZE = 1024 * 1024 * 2; // 2 MB per chunk

const VideoDownloader = () => {
  const [url, setUrl] = useState('https://www.techtt.site/html/getFile/Assets/Songs/VID_20251005_094344_745.mp4');
  const [progress, setProgress] = useState(0); // 0–1
  const [downloadedBytes, setDownloadedBytes] = useState(0);
  const [totalBytes, setTotalBytes] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [statusText, setStatusText] = useState('');
  const controllerRef = useRef(null);

  const getFilePath = () => {
    const fileName = `video_${Date.now()}.mp4`;
    return `${RNFS.DocumentDirectoryPath}/${fileName}`;
  };

  const [filePath, setFilePath] = useState(null);

  const resetState = () => {
    setProgress(0);
    setDownloadedBytes(0);
    setTotalBytes(null);
    setIsDownloading(false);
    setIsPaused(false);
    setStatusText('');
    controllerRef.current = null;
    setFilePath(null);
  };

  // Get total size via HEAD request
  const fetchContentLength = async (downloadUrl) => {
    const response = await fetch(downloadUrl, { method: 'HEAD' });
    const len = response.headers.get('Content-Length') || response.headers.get('content-length');
    if (!len) {
      throw new Error('Content-Length not available; cannot chunk.');
    }
    const size = Number(len);
    if (Number.isNaN(size)) {
      throw new Error('Invalid Content-Length header');
    }
    return size;
  };

  const downloadChunk = async (
    downloadUrl,
    start,
    end,
    path,
    append
  ) => {
    const headers = {
      Range: `bytes=${start}-${end}`,
    };

    // Abort controller to pause mid-chunk
    const controller = new AbortController();
    controllerRef.current = controller;

    const response = await fetch(downloadUrl, { method: 'GET', headers, signal: controller.signal });

    if (!response.ok && response.status !== 206) {
      // 206 expected for partial content
      throw new Error(`Server responded with status ${response.status}`);
    }

    const reader = (response).body?.getReader?.();
    if (!reader) {
      // fallback if body is not a stream (older RN fetch)
      const arrayBuffer = await response.arrayBuffer();
      const base64Chunk = Buffer.from(arrayBuffer).toString('base64');
      await RNFS.write(path, base64Chunk, append ? RNFS.AppendFile : RNFS.WriteFile, 'base64');
      return arrayBuffer.byteLength;
    }

    // Streaming reader path (if supported)
    let bytesRead = 0;
    let isFirstWrite = !append;

    while (true) {
      if (isPaused) {
        controller.abort();
        break;
      }

      const { done, value } = await reader.read();
      if (done) break;

      bytesRead += value.length;

      // convert chunk (Uint8Array) to base64
      const base64Chunk = Buffer.from(value).toString('base64');

      if (isFirstWrite) {
        await RNFS.writeFile(path, base64Chunk, 'base64');
        isFirstWrite = false;
      } else {
        await RNFS.appendFile(path, base64Chunk, 'base64');
      }

      const newDownloaded = downloadedBytes + bytesRead;
      setDownloadedBytes(newDownloaded);
      if (totalBytes) {
        setProgress(newDownloaded / totalBytes);
      }
    }

    return bytesRead;
  };

  const startDownload = async () => {
    if (!url) {
      setStatusText('Please enter a valid URL');
      return;
    }

    try {
      resetState();
      setStatusText('Fetching file info...');
      const size = await fetchContentLength(url);
      setTotalBytes(size);

      const path = getFilePath();
      setFilePath(path);

      setIsDownloading(true);
      setIsPaused(false);
      setStatusText('Downloading...');

      let start = 0;
      let currentDownloaded = 0;

      while (start < size) {
        if (isPaused) {
          setStatusText('Paused');
          setIsDownloading(false);
          return;
        }

        const end = Math.min(start + CHUNK_SIZE - 1, size - 1);
        const isAppend = start !== 0;

        const chunkBytes = await downloadChunk(url, start, end, path, isAppend);
        currentDownloaded += chunkBytes;
        setDownloadedBytes(currentDownloaded);
        setProgress(currentDownloaded / size);

        start = end + 1;
      }

      setIsDownloading(false);
      setStatusText('Download complete!');
    } catch (error) {
      console.warn('Download error:', error);
      setIsDownloading(false);
      if (isPaused) {
        setStatusText('Paused by user');
      } else {
        setStatusText(error?.message || 'Download failed');
      }
    }
  };

  const togglePauseResume = () => {
    if (!isDownloading && !isPaused) {
      // No active download
      return;
    }

    if (isPaused) {
      // resume
      setIsPaused(false);
      setIsDownloading(true);
      setStatusText('Resuming...');
      // Continue from current downloadedBytes
      resumeDownload();
    } else {
      // pause
      setIsPaused(true);
      setIsDownloading(false);
      setStatusText('Pausing...');
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    }
  };

  const resumeDownload = async () => {
    if (!url || totalBytes == null || !filePath) return;

    try {
      let currentDownloaded = downloadedBytes;
      let start = currentDownloaded;

      setStatusText('Downloading...');

      while (start < totalBytes) {
        if (isPaused) {
          setStatusText('Paused');
          setIsDownloading(false);
          return;
        }

        const end = Math.min(start + CHUNK_SIZE - 1, totalBytes - 1);
        const isAppend = true; // file already created

        const chunkBytes = await downloadChunk(url, start, end, filePath, isAppend);
        currentDownloaded += chunkBytes;
        setDownloadedBytes(currentDownloaded);
        setProgress(currentDownloaded / totalBytes);

        start = end + 1;
      }

      setIsDownloading(false);
      setStatusText('Download complete!');
    } catch (error) {
      console.warn('Resume error:', error);
      setIsDownloading(false);
      if (isPaused) {
        setStatusText('Paused by user');
      } else {
        setStatusText(error?.message || 'Resume failed');
      }
    }
  };

  const formattedProgress = () =>
    totalBytes
      ? `${((progress || 0) * 100).toFixed(1)}% (${(downloadedBytes / (1024 * 1024)).toFixed(
          2
        )}MB / ${(totalBytes / (1024 * 1024)).toFixed(2)}MB)`
      : '0%';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Video Downloader (RNFS + Chunk Download)</Text>

      <TextInput
        style={styles.input}
        placeholder="Paste video download URL here"
        value={url}
        onChangeText={setUrl}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={[styles.button, isDownloading && !isPaused ? styles.buttonDisabled : null]}
          onPress={startDownload}
          disabled={isDownloading && !isPaused}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            !(isDownloading || isPaused) ? styles.buttonDisabled : null,
          ]}
          onPress={togglePauseResume}
          disabled={!(isDownloading || isPaused)}
        >
          <Text style={styles.buttonText}>
            {isPaused ? 'Resume' : 'Pause'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              { flex: progress || 0 },
            ]}
          />
          <View
            style={[
              styles.progressBarRemainder,
              { flex: 1 - (progress || 0) },
            ]}
          />
        </View>
        <Text style={styles.progressText}>{formattedProgress()}</Text>
      </View>

      <Text style={styles.status}>{statusText}</Text>

      {filePath ? (
        <Text style={styles.filePath}>
          Saved to: {Platform.OS === 'android' ? `file://${filePath}` : filePath}
        </Text>
      ) : null}
    </View>
  );
};

export default VideoDownloader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 40,
    backgroundColor: '#0b1721',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#4b5563',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#ffffff',
    backgroundColor: '#111827',
    marginBottom: 16,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 12,
  },
  button: {
    flex: 1,
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#4b5563',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  progressContainer: {
    marginTop: 8,
  },
  progressBarBackground: {
    flexDirection: 'row',
    height: 10,
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: '#1f2933',
  },
  progressBarFill: {
    backgroundColor: '#10b981',
  },
  progressBarRemainder: {
    backgroundColor: 'transparent',
  },
  progressText: {
    marginTop: 8,
    color: '#e5e7eb',
    fontSize: 12,
  },
  status: {
    marginTop: 12,
    color: '#fbbf24',
    fontSize: 13,
  },
  filePath: {
    marginTop: 8,
    color: '#9ca3af',
    fontSize: 11,
  },
});

import { useState,useEffect,useRef } from "react";
import { View, Text, Image,StyleSheet,TouchableOpacity} from "react-native";
import Video from "react-native-video";
import Sound from "react-native-sound";
import RNFetchBlob from "react-native-blob-util";
import Pdf from 'react-native-pdf';

export async function getRealPath(uri) {
  if (uri.startsWith("content://")) {
    const stat = await RNFetchBlob.fs.stat(uri);
    return stat.path;
  }
  return uri.replace("file://", "");
}

export function GetMimeType({filename}) {
  const extension = filename.split('.').pop().toLowerCase();
  const mimeTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    pdf: 'application/pdf',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    // add more mappings as needed
  };
  const typesOfFile= mimeTypes[extension] || 'application/octet-stream';
  if(typesOfFile==='application/octet-stream'){
     (<View>
        <Text>Unknown file type</Text>
     </View>)
  }
  else if(typesOfFile.startsWith('image/')){
    return (<Image source={{ uri: `file://${filename}`}} style={{height:200,width:300}}/>)
  }
  else if(typesOfFile.startsWith('video/')){
    return (
      <Video
        source={{ uri: `file://${filename}` }}
        style={{ width: 350, height: 200 }}
        controls
      />
    );
  }

  if(typesOfFile.startsWith('audio/')){
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

   useEffect(()=>{
        const sound = new Sound(`file://${filename}`, null, (error) => {
      if (error) {
        console.log("❌ Failed to load audio:", error);
        return;
      }
      setDuration(sound.getDuration());
      soundRef.current = sound;
    });
    return () => {
      if (soundRef.current) {
        soundRef.current.release(); // cleanup
      }
    }
   },[filename])
  
   const togglePlay = () => {
    const sound = soundRef.current;
    if (!sound) return;

    if (isPlaying) {
      sound.pause();
      setIsPlaying(false);
    } else {
      sound.play((success) => {
        if (success) console.log("✅ Finished playing");
        else console.log("⚠️ Playback error");
        setIsPlaying(false);
        setProgress(0);
      });
      setIsPlaying(true);
      trackProgress();
    }
  };

    const trackProgress = () => {
    const sound = soundRef.current;
    if (!sound) return;

    const interval = setInterval(() => {
        console.log('runnnnn')
      sound.getCurrentTime((seconds) => {
        setProgress(()=>seconds);
        console.log(seconds)
      });
    }, 1000);

    // stop tracking when playback ends or paused
    const stopTracking = () => clearInterval(interval);
    sound.onEnd = stopTracking;

    if (!isPlaying) stopTracking();
  };

   return(
    <View style={styles.container}>
      <Text style={styles.filename}>{filename || "Unknown file"}</Text>

      {/* progress bar */}
      <View style={styles.progressContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${(progress / duration) * 100 || 0}%` },
          ]}
        />
      </View>

      {/* time display */}
      <Text style={styles.timeText}>
        {FormatTime(progress)} / {FormatTime(duration)} sec
      </Text>

      {/* play/pause button */}
      <TouchableOpacity style={styles.button} onPress={togglePlay}>
        <Text style={styles.buttonText}>{isPlaying ? "⏸ Pause" : "▶️ Play"}</Text>
      </TouchableOpacity>
    </View>
   );
  }
  
  if(typesOfFile==='application/pdf'){
  // You can pass: 
  // - 'https://example.com/file.pdf'
  // - 'file:///storage/emulated/0/Download/sample.pdf'
  // - 'data:application/pdf;base64,JVBERi0xLjQKJ...'
    const source = { uri: `file://${filename}`, cache: true };
    return (
    <View style={PdfStyles.container}>
      <Pdf
        source={source}
        trustAllCerts={true} // useful if you have self-signed HTTPS
        onLoadComplete={(pages) => console.log(`Loaded ${pages} pages`)}
        onError={(error) => console.log('PDF error:', error)}
        onPressLink={(uri) => console.log(`Link pressed: ${uri}`)}
        style={PdfStyles.pdf}
      />
    </View>
    );
  }
  if(typesOfFile==='application/msword' || typesOfFile==='application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
    return (
        <Text>preview not supported.it is under development.</Text>
    );
  }

}

   const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#111",
    borderRadius: 12,
    margin: 10,
    alignItems: "center",
  },
  filename: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  progressContainer: {
    width: "100%",
    height: 5,
    backgroundColor: "#333",
    borderRadius: 3,
    overflow: "hidden",
    marginVertical: 8,
  },
  progressBar: {
    height: 5,
    backgroundColor: "#00ff88",
  },
  timeText: {
    color: "#aaa",
    fontSize: 12,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#00ff88",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "#111",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const PdfStyles = StyleSheet.create({
  container: {
    height:350,
    width:'100%',
    backgroundColor: '#fff' },
  pdf: { 
    width: '100%', height: '100%'},
});


const FormatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "00:00";
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Voice from '@react-native-voice/voice';

const VoiceRecognition = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    console.log('onSpeechStart', e);
    setIsRecording(true);
  };

  const onSpeechEnd = (e) => {
    console.log('onSpeechEnd', e);
    setIsRecording(false);
  };

  const onSpeechResults = (e) => {
    console.log('onSpeechResults', e);
    setResults(e.value);
  };

  const onSpeechError = (e) => {
    console.log('onSpeechError', e);
    setError(JSON.stringify(e.error));
    setIsRecording(false);
  };

  const startRecognizing = async () => {
    setError('');
    setResults([]);
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Status: {isRecording ? 'Recording' : 'Not Recording'}</Text>
      {error && <Text style={{ color: 'red' }}>Error: {error}</Text>}
      <Button
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={isRecording ? stopRecognizing : startRecognizing}
      />
      <Text>Results:</Text>
      {results.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))}
    </View>
  );
};

export default VoiceRecognition;
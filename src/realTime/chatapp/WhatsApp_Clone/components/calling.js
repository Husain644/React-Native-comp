import {
  mediaDevices,
  RTCPeerConnection,
} from 'react-native-webrtc';

const servers = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
  ],
};

const pc = new RTCPeerConnection(servers);

const startCall = async () => {
  try {
    const stream = await mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach(track => pc.addTrack(track, stream));
    
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    
    // send offer to remote user using signaling
  } catch (err) {
    console.log('Error starting call:', err);
  }
};




export { startCall, pc };
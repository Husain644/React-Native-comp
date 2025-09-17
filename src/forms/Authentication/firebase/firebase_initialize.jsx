import { getApp, getApps } from '@react-native-firebase/app';
import { getAuth,GoogleAuthProvider, signInWithCredential } from '@react-native-firebase/auth';

export const initFirebase = () => {
  if (!getApps().length) {
    console.log("Firebase initialized automatically ✅");
  }
  return getApp();
};
const firebaseAuth = getAuth();
export  { firebaseAuth,GoogleAuthProvider, signInWithCredential}





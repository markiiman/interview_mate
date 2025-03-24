import { getFirestore } from 'firebase-admin/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDZKcJ6X5rE3493XYdrlFDRxzhn9MtagZ4',
  authDomain: 'interviewmate-c93c4.firebaseapp.com',
  projectId: 'interviewmate-c93c4',
  storageBucket: 'interviewmate-c93c4.firebasestorage.app',
  messagingSenderId: '374869914485',
  appId: '1:374869914485:web:20fb62572c77eec3ae593c',
  measurementId: 'G-B3MC9VXLGT',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

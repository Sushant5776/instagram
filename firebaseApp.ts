import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA7sqzoNVDFoNDbcNR5B-rKDEDrt8qX87s',
  authDomain: 'instagram-2-5a74c.firebaseapp.com',
  projectId: 'instagram-2-5a74c',
  storageBucket: 'instagram-2-5a74c.appspot.com',
  messagingSenderId: '729542966145',
  appId: '1:729542966145:web:55e3c0b4dd653228d8c680',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }

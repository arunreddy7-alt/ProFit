import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase only if it hasn't been initialized already and we're in a browser environment
let app = null;
let auth = null;

// Check if we're in a browser environment and if all required Firebase config values are present
if (typeof window !== 'undefined' && 
    firebaseConfig.apiKey && 
    firebaseConfig.authDomain && 
    firebaseConfig.projectId) {
  try {
    // Check if Firebase has already been initialized
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0]; // Use the existing app
    }
    
    if (app) {
      auth = getAuth(app);
      console.log("Firebase initialized successfully");
    } else {
      console.error("Firebase app initialization failed");
    }
  } catch (error) {
    console.error("Firebase initialization error:", error.message);
  }
} else {
  console.log("Firebase not initialized: Running in SSR or missing config");
}

export { app, auth };

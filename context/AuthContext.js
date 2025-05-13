'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../firebase/config';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    // Only run if auth is available (client-side and properly initialized)
    if (typeof window !== 'undefined' && auth) {
      try {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL
            });
          } else {
            setUser(null);
          }
          setLoading(false);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Auth state monitoring error:", error);
        setAuthError(error.message);
        setLoading(false);
      }
    } else {
      // If auth is not available, don't keep the UI waiting
      setLoading(false);
    }
  }, []);

  const signup = (email, password) => {
    if (!auth) return Promise.reject(new Error("Authentication not initialized"));
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    if (!auth) return Promise.reject(new Error("Authentication not initialized"));
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    if (!auth) return Promise.reject(new Error("Authentication not initialized"));
    setUser(null);
    await signOut(auth);
  };

  const googleSignIn = async () => {
    if (!auth) return Promise.reject(new Error("Authentication not initialized"));
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, googleSignIn, authError }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}; 

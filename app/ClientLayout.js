'use client';

import { useEffect, useState } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run auth state listener in browser environment
    if (typeof window !== 'undefined' && auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        // You can add global auth state management here
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
} 

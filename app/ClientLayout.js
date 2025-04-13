'use client';

import { AuthContextProvider } from '../context/AuthContext';

export default function ClientLayout({ children }) {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
} 
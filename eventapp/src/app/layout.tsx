// app/layout.tsx
import React from 'react';
import { EventsProvider } from './context/EventsContext';
import './globals.css'; // Required for Tailwind to work
//import './home.css';    // If using custom styles


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <EventsProvider>{children}</EventsProvider>
      </body>
    </html>
  );
}

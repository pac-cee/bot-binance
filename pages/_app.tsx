import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

type Theme = 'light' | 'dark' | 'system';

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('system');

  // Apply theme to <body>
  useEffect(() => {
    let t = theme;
    if (t === 'system') t = getSystemTheme();
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(t);
  }, [theme]);

  // Listen for system changes if theme is 'system'
  useEffect(() => {
    if (theme !== 'system') return;
    const listener = () => {
      const t = getSystemTheme();
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(t);
    };
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);
    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
  }, [theme]);

  // Persist theme in localStorage
  useEffect(() => {
    if (theme) localStorage.setItem('theme', theme);
  }, [theme]);
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) setTheme(stored);
  }, []);

  return (
    <>
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-card/80 rounded-xl shadow p-2">
        <button className={`button px-3 py-1 ${theme === 'dark' ? 'ring-2 ring-primary' : ''}`} onClick={() => setTheme('dark')}>Dark</button>
        <button className={`button px-3 py-1 ${theme === 'light' ? 'ring-2 ring-primary' : ''}`} onClick={() => setTheme('light')}>Light</button>
        <button className={`button px-3 py-1 ${theme === 'system' ? 'ring-2 ring-primary' : ''}`} onClick={() => setTheme('system')}>System</button>
      </div>
      <Component {...pageProps} />
    </>
  );
}

import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Auto-detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark));
  }, []);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <Button onClick={() => setDark(d => !d)}>
          {dark ? '🌙 Dark' : '☀️ Light'}
        </Button>
      </div>
      <Component {...pageProps} />
    </>
  );
}

'use client';

import * as React from 'react';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <span className="sr-only">Carregando tema...</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="h-9 w-9"
      aria-label="Alternar tema"
    >
      <Sun
        className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0
          dark:-rotate-90"
      />
      <Moon
        className="absolute h-5 w-5 scale-0 rotate-90 transition-all
          dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
}

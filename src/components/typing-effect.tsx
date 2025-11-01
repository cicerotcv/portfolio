'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  loop?: boolean;
}

export function TypingEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  className = '',
  loop = false,
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        if (words.length > 1 || loop) {
          setIsDeleting(true);
        }
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(
      () => {
        if (
          words.length === 1 &&
          currentText.length === currentWord.length &&
          !loop
        ) {
          setIsComplete(true);
          return;
        }

        if (isDeleting) {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            if (loop && words.length === 1) {
              setCurrentText('');
            } else {
              setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
          }
        } else {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            if (words.length === 1 && !loop) {
              setIsComplete(true);
            } else {
              setIsPaused(true);
            }
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    isPaused,
    words,
    typingSpeed,
    deletingSpeed,
    loop,
    pauseTime,
  ]);

  return (
    <span className={className}>
      {currentText}
      {!isComplete && (
        <span className="text-primary animate-caret-blink ml-0.5">|</span>
      )}
    </span>
  );
}

'use client';

import * as React from 'react';

interface InfiniteCarouselProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export function InfiniteCarousel({
  children,
  speed = 50,
  direction = 'left',
  className = '',
}: InfiniteCarouselProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex">
        <div
          className="animate-scroll flex shrink-0"
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction === 'left' ? 'normal' : 'reverse',
          }}
        >
          {childrenArray.map((child, index) => (
            <div key={`first-${index}`} className="shrink-0">
              {child}
            </div>
          ))}
        </div>

        <div
          className="animate-scroll flex shrink-0"
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction === 'left' ? 'normal' : 'reverse',
          }}
          aria-hidden="true"
        >
          {childrenArray.map((child, index) => (
            <div key={`second-${index}`} className="shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';

export function useScrollHeight() {
  const [bodyOffset, setBodyOffset] = useState<DOMRect | undefined>();
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = () => {
    if (typeof window === 'undefined' || !window.document) {
      return;
    }
    setBodyOffset(document.body.getBoundingClientRect());
    setScrollY(bodyOffset ? -bodyOffset.top : 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return scrollY;
}

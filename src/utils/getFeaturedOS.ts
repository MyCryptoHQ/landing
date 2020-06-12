import { useState, useEffect } from 'react';
import { OS } from '@config';

export const getFeaturedOS = (): string => {
  const [featuredOS, setFeaturedOS] = useState(OS.LINUX64);

  useEffect(() => {
    if (
      /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent) ||
      navigator.appVersion.includes('Mac')
    ) {
      setFeaturedOS(OS.MAC);
    } else if (navigator.appVersion.includes('Win')) {
      setFeaturedOS(OS.WINDOWS);
    }
  }, []);
  return featuredOS;
};

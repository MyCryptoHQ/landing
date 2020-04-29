import React from 'react';

import sparkles from '@/assets/icn-sparkles-4.svg';
import oval from '@/assets/icn-oval.svg';
import swoosh from '@/assets/icn-purple-swoosh.svg';

const IconMap = {
  sparkles,
  oval,
  swoosh,
};

type IconProps = {
  name: keyof typeof IconMap;
};

const Icon = ({ name, ...props }: IconProps) => {
  const SVGIcon = IconMap[name];
  return <SVGIcon {...props} />;
};

export default Icon;

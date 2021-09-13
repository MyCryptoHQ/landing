import { ReactNode } from 'react';
import { IconName } from '@components';

export interface CarouselElement {
  title: string;
  text: ReactNode;
  icon: IconName;
}

import { seasons } from '@config';
import { isAfter, isBefore } from 'date-fns';

export const getSeason = () => {
  const date = new Date();
  const year = date.getFullYear();
  if (
    isAfter(date, new Date(year, 0, 1)) &&
    isBefore(date, new Date(year, 2, 20))
  ) {
    return seasons.winter;
  } else if (
    isAfter(date, new Date(year, 2, 20)) &&
    isBefore(date, new Date(year, 5, 20))
  ) {
    return seasons.spring;
  } else if (
    isAfter(date, new Date(year, 5, 20)) &&
    isBefore(date, new Date(year, 8, 22))
  ) {
    return seasons.summer;
  } else if (
    isAfter(date, new Date(year, 8, 22)) &&
    isBefore(date, new Date(year, 11, 20))
  ) {
    return seasons.fall;
  } else {
    return seasons.winter;
  }
};

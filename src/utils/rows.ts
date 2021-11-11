export const isOddRow = (idx: number) => {
  return idx % (5 + 6) <= 5;
};

export const isFirstOfRow = (idx: number) => {
  return idx % (5 + 6) === 0;
};

export const isLastOfRow = (idx: number) => {
  return idx % (5 + 6) === 4;
};

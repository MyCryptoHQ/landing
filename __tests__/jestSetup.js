import { noOp } from '@utils';

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener: noOp,
    removeListener: noOp,
  }));

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  (callback => {
    setTimeout(callback, 0);
  });

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

Object.defineProperty(
  window.navigator,
  'appVersion',
  (value => ({
    get() {
      return value;
    },
    set(v) {
      value = v;
    },
  }))(window.navigator['appVersion'])
);

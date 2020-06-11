import { getFeaturedOS } from '@utils';

describe('getFeaturedOS', () => {
  it('Get Mac as the OS', () => {
    (global as any).navigator.appVersion =
      '5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36';

    expect(getFeaturedOS()).toBe('mac');
  });

  it('Defaults to linux', () => {
    (global as any).navigator.appVersion = "I'm super secret";

    expect(getFeaturedOS()).toBe('linux64');
  });
});

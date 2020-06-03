export enum OS {
  WINDOWS = 'windows',
  MAC = 'mac',
  LINUX64 = 'linux64',
  LINUX32 = 'linux32',
  STANDALONE = 'standalone',
}

export const OSNames: { [key: string]: string } = {
  [OS.WINDOWS]: 'Windows',
  [OS.MAC]: 'MacOS',
  [OS.LINUX64]: 'Linux (64-bit)',
};

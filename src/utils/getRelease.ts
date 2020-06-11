import { GITHUB_RELEASES_URL, OS } from '@config';

export interface ReleaseURLs {
  [key: string]: string;
}

export interface ReleaseInfo {
  name: string;
  version: string;
  releaseUrls: ReleaseURLs;
}

export const getRelease = async () => {
  const response = await fetch(GITHUB_RELEASES_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const ASSET_REG_EXPS = {
    [OS.MAC]: /^mac.*\.dmg$/,
    [OS.WINDOWS]: /^windows.*\.exe$/,
    [OS.LINUX32]: /^linux-i386.*\.AppImage$/,
    [OS.LINUX64]: /^linux-x86-64.*\.AppImage$/,
    [OS.STANDALONE]: /^standalone.*\.zip$/,
  };

  const { assets, tag_name: version, name } = await response.json();

  const releaseUrls: ReleaseURLs = {};
  Object.entries(ASSET_REG_EXPS).forEach(([key, regex]) => {
    const asset = assets.find((a: ReleaseInfo) => regex.test(a.name));
    if (asset) {
      releaseUrls[key] = asset.browser_download_url;
    }
  });

  const releaseInfo: ReleaseInfo = { version, name, releaseUrls };
  return releaseInfo;
};

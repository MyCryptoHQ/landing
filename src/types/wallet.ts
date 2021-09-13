export enum WALLET_CONNECTIVITY {
  WEB3 = 'web',
}

export enum WALLET_TYPES {
  WALLET = 'wallet',
}

export enum WALLET_TAGS {
  HARDWARE = 'Hardware',
  WEB = 'Web',
  MOBILE = 'Mobile',
}

export interface IWallet {
  name: string;
  desc: string;
  type: WALLET_TYPES;
  connectivity: WALLET_CONNECTIVITY;
  icon: string;
  tags: WALLET_TAGS[];
  urls: {
    website: string;
    support: string;
  };
  priority: number;
  mostPopular?: boolean;
}

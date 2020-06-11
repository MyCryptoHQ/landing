import React from 'react';
import { Image, ImageProps } from '@components';

import oval from '@assets/icn-oval.svg';
import swoosh from '@assets/icn-purple-swoosh.svg';
import bank from '@assets/illo-bank.svg';
import withMYC from '@assets/illo-with-mycrypto.svg';
import protect from '@assets/icn-protect.svg';
import opensource from '@assets/icn-opensource.svg';
import vault from '@assets/icn-vault2.svg';
import dashboard from '@assets/illo-view-dashboard.svg';
import manageYourWallets from '@assets/illo-manage-your-wallets.svg';
import controlCrypto from '@assets/control-crypto.svg';
import dashboardMobile from '@assets/view-dashboard-mobile.svg';
import manageYourWalletsMobile from '@assets/manage-your-wallets-mobile.svg';
import controlCryptoMobile from '@assets/control-crypto-mobile.svg';
import newWallet from '@assets/icn-new-wallet.svg';
import signIn from '@assets/icn-sign-in.svg';
import existingWallet from '@assets/icn-existing-wallet.svg';
import bottle from '@assets/illo-bottle.svg';
import more from '@assets/icn-more.svg';
import plus from '@assets/icn-plus.svg';
import circle from '@assets/icn-circle.svg';
import rectangle from '@assets/icn-rectangle.svg';
import facebook from '@assets/socials/social-facebook.svg';
import slack from '@assets/socials/social-slack.svg';
import twitter from '@assets/socials/social-twitter.svg';
import reddit from '@assets/socials/social-reddit.svg';
import telegram from '@assets/socials/social-telegram.svg';
import github from '@assets/socials/social-github.svg';
import discord from '@assets/socials/social-discord.svg';
import linkedin from '@assets/socials/social-linkedin.svg';
import medium from '@assets/socials/social-medium.svg';
import MYCLogo from '@assets/logo-mycrypto.svg';
import bitcoin from '@assets/bitcoin.svg';
import ether from '@assets/ether.svg';

/**
 * Wallets
 */
import metamask from '@assets/wallets/metamask.svg';
import ledger from '@assets/wallets/ledger.svg';
import trezor from '@assets/wallets/trezor.svg';
import walletconnect from '@assets/wallets/walletconnect.svg';
import frame from '@assets/wallets/frame.svg';
import web3Default from '@assets/wallets/web3-default.svg';
import trust from '@assets/wallets/trust-2.svg';

const IconMap = {
  MYCLogo,
  bitcoin,
  ether,
  facebook,
  slack,
  twitter,
  reddit,
  telegram,
  github,
  discord,
  linkedin,
  medium,
  oval,
  swoosh,
  plus,
  circle,
  rectangle,
  signIn,
  bottle,
  existingWallet,
  bank,
  more,
  withMYC,
  protect,
  opensource,
  vault,
  dashboard,
  newWallet,
  manageYourWallets,
  controlCrypto,
  dashboardMobile,
  manageYourWalletsMobile,
  controlCryptoMobile,
  metamask,
  ledger,
  trezor,
  walletconnect,
  frame,
  trust,
  web3Default,
};

export type IconName = keyof typeof IconMap;
export const IconName = undefined;

type IconProps = {
  name: IconName;
};

const Icon = ({
  name,
  width = 'auto',
  height = 'auto',
  ...props
}: IconProps & ImageProps) => {
  const SVGIcon = IconMap[name as IconName];
  return <Image src={SVGIcon} width={width} height={height} {...props} />;
};
export default Icon;

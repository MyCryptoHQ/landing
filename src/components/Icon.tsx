import { Image, ImageProps } from '@components';

import oval from '@assets/icn-oval.svg';
import swoosh from '@assets/icn-purple-swoosh.svg';
import bank from '@assets/illo-bank.svg';
import withMYC from '@assets/illo-with-mycrypto.svg';
import protect from '@assets/icn-protect.svg';
import caret from '@assets/icn-caret.svg';
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
import sadWallet from '@assets/icn-sad-wallet.svg';
import teamTwitter from '@assets/socials/team-twitter.svg';
import teamLinkedin from '@assets/socials/team-linkedin.svg';
import teamGithub from '@assets/socials/team-github.svg';
import summerLeft from '@assets/illo_summer_left.svg';
import summerRight from '@assets/illo_summer_right.svg';
import fallBackground from '@assets/illo_fall_bkgd.svg';
import fallLeft from '@assets/illo_fall_left.svg';
import fallRight from '@assets/illo_fall_right.svg';
import summerBackground from '@assets/illo_summer_bkgd.svg';
import winterLeft from '@assets/illo_winter_left.svg';
import winterRight from '@assets/illo_winter_right.svg';
import winterBackground from '@assets/illo_winter_bkgd.svg';
import springLeft from '@assets/illo_spring_left.svg';
import springRight from '@assets/illo_spring_right.svg';
import springBackground from '@assets/illo_spring_bkgd.svg';
import buy from '@assets/buy.svg';
import create from '@assets/create.svg';
import demo from '@assets/demo.svg';
import screenLock from '@assets/screen_lock.svg';
import protectedTransaction from '@assets/protected_transaction.svg';
import desktopApp from '@assets/desktop_app.svg';
import everyWallet from '@assets/every_wallet.svg';
import everyToken from '@assets/every_token.svg';
import everyTransaction from '@assets/every_transaction.svg';
import twitterTestimonial from '@assets/twitter_testimonial.svg';
import twitterTestimonialTwo from '@assets/twitter_testimonial_2.svg';
import twitterTestimonialMobile from '@assets/twitter_testimonial_mobile.svg';
import twitterTestimonialMobileTwo from '@assets/twitter_testimonial_mobile_2.svg';
import knowledgeBase from '@assets/knowledge_base.svg';
import newsletter from '@assets/newsletter.svg';
import illoTelegram from '@assets/telegram.svg';
import search from '@assets/search.svg';
import notification from '@assets/notification.svg';
import lock from '@assets/lock.svg';
import alert from '@assets/alert.svg';
import question from '@assets/question.svg';
import star from '@assets/star.svg';
import announcement from '@assets/announcement.svg';
import createWallet from '@assets/create_wallet.svg';
import connectWallet from '@assets/connect_wallet.svg';
import decentralizedSwap from '@assets/decentralized_swap.svg';
import portfolioView from '@assets/portfolio_view.svg';
import membership from '@assets/membership.svg';
import arrow from '@assets/arrow.svg';
import navLaunchDemo from '@assets/demo-mode.svg';
import navBuyEth from '@assets/buy-eth.svg';
import navCreateWallet from '@assets/create-wallet.svg';
import navConnectWallet from '@assets/connect-wallet.svg';

import linkJumpTo from '@assets/icn-link-jumpto.svg';

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

/**
 * Wallet Tags
 */

import desktopTag from '@assets/desktopTag.svg';
import exchangeTag from '@assets/exchangeTag.svg';
import hardwareTag from '@assets/hardwareTag.svg';
import mobileTag from '@assets/mobileTag.svg';
import otherTag from '@assets/otherTag.svg';
import walletconnectTag from '@assets/walletconnectTag.svg';
import webTag from '@assets/webTag.svg';

const IconMap = {
  summerLeft,
  summerRight,
  summerBackground,
  springLeft,
  springRight,
  springBackground,
  fallLeft,
  fallRight,
  fallBackground,
  winterLeft,
  winterRight,
  winterBackground,
  MYCLogo,
  bitcoin,
  ether,
  facebook,
  slack,
  twitter,
  reddit,
  caret,
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
  sadWallet,
  linkJumpTo,
  buy,
  create,
  demo,
  newsletter,
  search,
  notification,
  lock,
  alert,
  question,
  star,
  announcement,
  membership,
  arrow,
  'portfolio-view': portfolioView,
  'decentralized-swap': decentralizedSwap,
  'create-wallet': createWallet,
  'connect-wallet': connectWallet,
  'knowledge-base': knowledgeBase,
  'illo-telegram': illoTelegram,
  'screen-lock': screenLock,
  'protected-transaction': protectedTransaction,
  'desktop-app': desktopApp,
  'every-wallet': everyWallet,
  'every-token': everyToken,
  'every-transaction': everyTransaction,
  'twitter-testimonial': twitterTestimonial,
  'twitter-testimonial-two': twitterTestimonialTwo,
  'twitter-testimonial-mobile': twitterTestimonialMobile,
  'twitter-testimonial-mobile-two': twitterTestimonialMobileTwo,
  'team-twitter': teamTwitter,
  'team-github': teamGithub,
  'team-linkedin': teamLinkedin,
  'nav-launch-demo': navLaunchDemo,
  'nav-buy-eth': navBuyEth,
  'nav-create-wallet': navCreateWallet,
  'nav-connect-wallet': navConnectWallet,

  /* Wallet Tags */

  'desktop-tag': desktopTag,
  'exchange-tag': exchangeTag,
  'hardware-tag': hardwareTag,
  'mobile-tag': mobileTag,
  'other-tag': otherTag,
  'walletconnect-tag': walletconnectTag,
  'web-tag': webTag,
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
  color,
  ...props
}: IconProps & ImageProps) => {
  const SVGIcon = IconMap[name as IconName];
  return (
    <Image
      src={SVGIcon}
      width={width}
      height={height}
      color={color}
      {...props}
    />
  );
};
export default Icon;

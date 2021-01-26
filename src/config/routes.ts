export interface TRoutes {
  [K: string]: {
    path: string;
  };
}
export const TRoutes = undefined;

export const APP_ROUTES: TRoutes = {
  DASHBOARD: {
    path: '/dashboard',
  },
  DOWNLOAD: {
    path: '/download-desktop-app',
  },
  ADD_ACCOUNT: {
    path: '/add-account',
  },
  SEND: {
    path: '/send',
  },
  REQUEST: {
    path: '/request',
  },
  SWAP: {
    path: '/swap',
  },
  SIGN_MESSAGE: {
    path: '/sign-message',
  },
  VERIFY_MESSAGE: {
    path: '/verify-message',
  },
  BROADCAST_TRANSACTION: {
    path: '/broadcast-transaction',
  },
  INTERACT_WITH_CONTRACT: {
    path: '/interact-with-contracts',
  },
  DEPLOY_CONTRACT: {
    path: '/deploy-contracts',
  },
  ENS: {
    path: '/ens',
  },
  SETTINGS: {
    path: '/settings',
  },
};

export type RouteName = keyof TRoutes;
export const RouteName = undefined;

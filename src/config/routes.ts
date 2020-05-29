export interface TRoutes {
  [K: string]: {
    path: string;
  };
}

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
};

export type RouteName = keyof TRoutes;

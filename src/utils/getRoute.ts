import { APP_ROUTES, RouteName, URLS } from '@config';

export const getRoute = (name: RouteName) => {
  return `${URLS.app}${APP_ROUTES[name].path}`;
};

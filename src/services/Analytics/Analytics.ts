/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { AxiosInstance } from 'axios';
import ApiService from '../ApiService';
import {
  ANALYTICS_API_URL,
  ANALYTICS_ID_SITE,
  ANALYTICS_REC,
} from './constants';

export interface Params {
  [key: string]: any;
}

export interface CvarEntry {
  [key: string]: [string, string];
}

let instantiated = false;

export default class AnalyticsService {
  public static instance = new AnalyticsService();

  private service: AxiosInstance = ApiService.generateInstance({
    baseURL: ANALYTICS_API_URL,
    timeout: 5000,
  });

  constructor() {
    if (instantiated) {
      throw new Error(`AnalyticsService has already been instantiated.`);
    } else {
      instantiated = true;
    }
  }

  public trackLegacy(
    category: string,
    eventAction: string,
    eventParams?: object
  ): Promise<any> {
    return this.track(category, `Legacy_${eventAction}`, eventParams);
  }

  public track(
    category: string,
    eventAction: string,
    eventParams?: object
  ): Promise<any> {
    const customParams: Params = {
      ...eventParams,
    };

    const cvar: object = this.mapParamsToCvars(customParams);

    const params: object = {
      action_name: eventAction,
      e_c: category,
      e_a: eventAction,
      idsite: ANALYTICS_ID_SITE,
      rec: ANALYTICS_REC,
      cvar: JSON.stringify(cvar),
    };

    return this.service.get('', { params }).catch();
  }

  public trackPageVisit(pageUrl: string): Promise<any> {
    const params: object = {
      action_name: 'Page navigation',
      url: pageUrl,
      idsite: ANALYTICS_ID_SITE,
      rec: ANALYTICS_REC,
    };

    return this.service.get('', { params }).catch();
  }

  private mapParamsToCvars(params: Params): object {
    return Object.keys(params).reduce((tempObject: CvarEntry, key, index) => {
      tempObject[index + 1] = [key, params[key].toString()];
      return tempObject;
    }, {});
  }
}

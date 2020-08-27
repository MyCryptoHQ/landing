import mockAxios from 'jest-mock-axios';
import { waitFor } from '@testing-library/react';

import AnalyticsService from './Analytics';

let category: string;
let eventAction: string;
let appUrl: string;

describe('AnalyticsService', () => {
  beforeEach(() => {
    category = 'Category';
    eventAction = 'Name of Event';
    appUrl = 'App route url';
  });

  it('should send an action name', async () => {
    const {
      status,
      config: { params },
    } = await AnalyticsService.instance.track(category, eventAction);
    expect(status).toBe(200);
    expect(params.e_c).toBe(category);
    expect(params.action_name).toBe(eventAction);

    await waitFor(() => expect(mockAxios.get).toBeCalled());
    mockAxios.mockResponse({ data: '' });
  });

  it('should add Legacy_ prefix to legacy event', async () => {
    const {
      status,
      config: { params },
    } = await AnalyticsService.instance.trackLegacy(category, eventAction);
    expect(status).toBe(200);
    expect(params.e_c).toBe(category);
    expect(params.action_name).toBe(`Legacy_${eventAction}`);

    await waitFor(() => expect(mockAxios.get).toBeCalled());
    mockAxios.mockResponse({ data: '' });
  });

  it('should add page url param to page visit event', async () => {
    const {
      status,
      config: { params },
    } = await AnalyticsService.instance.trackPageVisit(appUrl);
    expect(status).toBe(200);
    expect(params.url).toBe(appUrl);

    await waitFor(() => expect(mockAxios.get).toBeCalled());
    mockAxios.mockResponse({ data: '' });
  });
});

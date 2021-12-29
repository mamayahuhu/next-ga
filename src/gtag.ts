import {
  AnonymizeIp,
  Cookies,
  CustomEvent,
  ExceptionEvent,
  PageView,
  ScreenViewEvent,
  TimingCompleteEvent,
} from "./types";

export const getGATrackingId = (): string => {
  return process.env.NEXT_PUBLIC_GA_TRACKING_ID!;
};

export const config = (config: PageView | Cookies | AnonymizeIp) => {
  try {
    if (window.gtag) {
      window.gtag("config", getGATrackingId(), config);
    }
  } catch (error) {
    console.log(`Error from the page view => ${error}`);
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (pageView: PageView) => {
  config(pageView);
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: string,
  event:
    | Event
    | ScreenViewEvent
    | TimingCompleteEvent
    | ExceptionEvent
    | AnonymizeIp
    | CustomEvent
) => {
  try {
    if (window.gtag) {
      window.gtag("event", action, event);
    }
  } catch (error) {
    console.log(`Error from the event => ${error}`);
  }
};

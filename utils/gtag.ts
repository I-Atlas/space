// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
import * as process from "process";

export const pageview = (url: string) => {
  //@ts-ignore
  window.gtag("config", process.env.GA_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category = "general",
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

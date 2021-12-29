export interface PageView {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  send_page_view?: string;
}

export interface AnonymizeIp {
  anonymize_ip: boolean;
}

export interface Cookies {
  cookie_domain?: string;
  cookie_expires?: number;
  cookie_prefix?: string;
  cookie_update?: boolean;
  cookie_flags?: string;
}

export interface Event {
  event_category?: string;
  event_label?: string;
  value?: number;
}

export interface ScreenViewEvent {
  screen_name: string;
  app_name: string;
  app_id?: string;
  app_version?: string;
  app_installer_id?: string;
}

export interface TimingCompleteEvent {
  name: string;
  value: number;
  event_category?: string;
  event_label?: string;
}

export interface ExceptionEvent {
  description?: string;
  fatal?: boolean;
}

export interface CustomEvent {
  [key: string]: unknown;
}

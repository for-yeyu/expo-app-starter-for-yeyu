export type GetAppInfoResult = {
  appName: string;
  slug: string;
  environment: 'development' | 'production';
  apiBaseUrl?: string;
};

import Constants from 'expo-constants';

declare const process: {
  env: {
    EXPO_PUBLIC_API_BASE_URL?: string;
    EXPO_PUBLIC_ENVIRONMENT?: 'development' | 'production';
  };
};

const expoConfig = Constants.expoConfig;

export const clientEnv = {
  appName: expoConfig?.name as string,
  slug: expoConfig?.slug as string,
  environment: process.env.EXPO_PUBLIC_ENVIRONMENT as 'development' | 'production',
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL,
};

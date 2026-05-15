import { clientEnv } from '@/configs/client-env';
import type { GetAppInfoResult } from '../types';

export async function getAppInfo(): Promise<GetAppInfoResult> {
  return {
    appName: clientEnv.appName,
    slug: clientEnv.slug,
    environment: clientEnv.environment,
    apiBaseUrl: clientEnv.apiBaseUrl,
  };
}

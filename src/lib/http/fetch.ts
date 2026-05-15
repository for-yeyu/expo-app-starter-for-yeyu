import { clientEnv } from '@/configs/client-env';
import { HttpRequestError } from '@/lib/common/errors';

export async function httpRequest<T = unknown>({
  url,
  headers,
  ...requestInit
}: RequestInit & {
  url: string;
}): Promise<T> {
  const requestHeaders = new Headers(headers);

  requestHeaders.set('Accept', 'application/json');

  if (!requestHeaders.has('Content-Type')) {
    requestHeaders.set('Content-Type', 'application/json');
  }

  const response = await fetch(url, {
    ...requestInit,
    headers: requestHeaders,
  });

  if (!response.ok) {
    throw new HttpRequestError('Request failed', {
      status: response.status,
      url,
      body: await response.text(),
    });
  }

  return (await response.json()) as T;
}

export async function apiRequest<T = unknown>({
  path,
  ...requestInit
}: RequestInit & {
  path: string;
}): Promise<T> {
  if (clientEnv.apiBaseUrl == null) {
    throw new HttpRequestError('API base URL is not configured', { path });
  }

  const baseUrl = clientEnv.apiBaseUrl.endsWith('/')
    ? clientEnv.apiBaseUrl
    : `${clientEnv.apiBaseUrl}/`;
  const pathname = path.replace(/^\//, '');
  const url = new URL(pathname, baseUrl).toString();

  return await httpRequest<T>({
    url,
    ...requestInit,
  });
}

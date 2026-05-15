import { apiRequest } from '@/lib/http/fetch';
import type { GetHealthResult } from '../types';

export async function getHealth(): Promise<GetHealthResult> {
  return await apiRequest<GetHealthResult>({
    path: 'health',
  });
}

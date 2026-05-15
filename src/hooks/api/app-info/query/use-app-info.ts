import { useQuery } from '@tanstack/react-query';
import { getAppInfo } from '@/api/app-info';

export function useAppInfo() {
  return useQuery({
    queryKey: ['app-info'],
    queryFn: getAppInfo,
  });
}

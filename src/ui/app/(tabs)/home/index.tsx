import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppInfo } from '@/hooks/api/app-info';
import { useHealth } from '@/hooks/api/health';

export function HomePage() {
  const appInfoQuery = useAppInfo();
  const healthQuery = useHealth();
  const appInfo = appInfoQuery.data;
  const canCheckApi = appInfo?.apiBaseUrl != null;

  return (
    <SafeAreaView className="flex-1 bg-brand-50" edges={['top', 'left', 'right']}>
      <ScrollView contentContainerClassName="flex-grow justify-center gap-6 px-5 py-6">
        <View className="gap-3">
          <Text className="text-sm font-bold uppercase tracking-normal text-brand-700">
            expo template
          </Text>
          <Text className="text-4xl font-extrabold tracking-normal text-slate-900">
            {appInfo?.appName}
          </Text>
        </View>

        {appInfo == null ? (
          <Text className="text-base text-slate-500">loading app info</Text>
        ) : (
          <View className="gap-4 rounded-lg border border-brand-200 bg-white p-4 shadow-sm shadow-brand-200">
            <View className="gap-1">
              <Text className="text-sm uppercase tracking-normal text-slate-500">environment</Text>
              <Text className="text-lg font-semibold text-slate-900">{appInfo.environment}</Text>
            </View>
            <View className="gap-1">
              <Text className="text-sm uppercase tracking-normal text-slate-500">slug</Text>
              <Text className="text-lg font-semibold text-slate-900">{appInfo.slug}</Text>
            </View>
            {appInfo.apiBaseUrl != null && (
              <View className="gap-1">
                <Text className="text-sm uppercase tracking-normal text-slate-500">api</Text>
                <Text className="text-lg font-semibold text-slate-900">{appInfo.apiBaseUrl}</Text>
              </View>
            )}
          </View>
        )}

        <Pressable
          onPress={() => {
            void appInfoQuery.refetch();
          }}
          className="self-start rounded-md bg-brand-400 px-6 py-4 active:opacity-80"
        >
          <Text className="text-base font-bold text-brand-950">Refresh</Text>
        </Pressable>

        <View className="gap-4 rounded-lg border border-brand-200 bg-white p-4 shadow-sm shadow-brand-200">
          <View className="gap-1">
            <Text className="text-sm uppercase tracking-normal text-slate-500">request flow</Text>
            <Text className="text-lg font-semibold text-slate-900">
              {healthQuery.data == null ? 'health check is idle' : healthQuery.data.status}
            </Text>
            {healthQuery.data != null && (
              <Text className="text-base text-slate-500">{healthQuery.data.timestamp}</Text>
            )}
            {healthQuery.error != null && (
              <Text className="text-sm text-red-600">{healthQuery.error.message}</Text>
            )}
          </View>

          <Pressable
            disabled={!canCheckApi}
            onPress={() => {
              void healthQuery.refetch();
            }}
            className="self-start rounded-md border border-brand-500 px-6 py-4 active:opacity-80 disabled:border-slate-300 disabled:opacity-55"
          >
            <Text className="text-base font-bold text-brand-700">Check API</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

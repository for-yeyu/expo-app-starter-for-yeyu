import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { clientEnv } from '@/configs/client-env';

export function SettingsPage() {
  return (
    <SafeAreaView className="flex-1 bg-brand-50" edges={['top', 'left', 'right']}>
      <ScrollView contentContainerClassName="flex-grow gap-6 px-5 py-6">
        <View className="gap-2">
          <Text className="text-sm font-bold uppercase tracking-normal text-brand-700">
            preferences
          </Text>
          <Text className="text-3xl font-extrabold tracking-normal text-slate-900">Settings</Text>
        </View>

        <View className="gap-4 rounded-lg border border-brand-200 bg-white p-4 shadow-sm shadow-brand-200">
          <View className="gap-1">
            <Text className="text-sm uppercase tracking-normal text-slate-500">app name</Text>
            <Text className="text-lg font-semibold text-slate-900">{clientEnv.appName}</Text>
          </View>
          <View className="gap-1">
            <Text className="text-sm uppercase tracking-normal text-slate-500">environment</Text>
            <Text className="text-lg font-semibold text-slate-900">{clientEnv.environment}</Text>
          </View>
          {clientEnv.apiBaseUrl != null && (
            <View className="gap-1">
              <Text className="text-sm uppercase tracking-normal text-slate-500">api</Text>
              <Text className="text-lg font-semibold text-slate-900">{clientEnv.apiBaseUrl}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

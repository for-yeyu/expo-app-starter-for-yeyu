import '@/styles/index.css';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Providers } from '@/ui/components/providers';

export default function RootLayout() {
  return (
    <Providers>
      <StatusBar style="dark" backgroundColor="#f6fbf3" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </Providers>
  );
}

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/styles/tokens';
import { Providers } from '@/ui/components/providers';

export default function RootLayout() {
  return (
    <Providers>
      <StatusBar style="dark" backgroundColor={colors.background} />
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

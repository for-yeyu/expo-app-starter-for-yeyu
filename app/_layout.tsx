import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'A',
          }}
        />
        <Tabs.Screen
          name="b"
          options={{
            title: 'B',
          }}
        />
      </Tabs>
    </>
  );
}

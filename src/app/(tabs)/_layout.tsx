import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#a2cb8b',
        tabBarInactiveTintColor: '#617084',
        tabBarStyle: {
          borderTopColor: '#d9edcd',
          backgroundColor: '#ffffff',
        },
        tabBarIcon: ({ color, size }) => {
          const iconName: ComponentProps<typeof Ionicons>['name'] =
            route.name === 'settings' ? 'settings-outline' : 'home-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}

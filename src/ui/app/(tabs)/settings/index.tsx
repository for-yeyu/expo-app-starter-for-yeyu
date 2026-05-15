import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { clientEnv } from '@/configs/client-env';
import { colors, radius, spacing } from '@/styles/tokens';

export function SettingsPage() {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.panel}>
          <View style={styles.row}>
            <Text style={styles.label}>app name</Text>
            <Text style={styles.value}>{clientEnv.appName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>environment</Text>
            <Text style={styles.value}>{clientEnv.environment}</Text>
          </View>
          {clientEnv.apiBaseUrl != null && (
            <View style={styles.row}>
              <Text style={styles.label}>api</Text>
              <Text style={styles.value}>{clientEnv.apiBaseUrl}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    gap: spacing.lg,
    padding: spacing.lg,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 0,
  },
  panel: {
    gap: spacing.md,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    backgroundColor: colors.surface,
    padding: spacing.md,
  },
  row: {
    gap: spacing.xs,
  },
  label: {
    color: colors.mutedText,
    fontSize: 13,
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  value: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '600',
  },
});

import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useAppInfo } from '@/hooks/api/app-info';
import { useHealth } from '@/hooks/api/health';
import { colors, radius, spacing } from '@/styles/tokens';

export function HomePage() {
  const appInfoQuery = useAppInfo();
  const healthQuery = useHealth();
  const appInfo = appInfoQuery.data;
  const canCheckApi = appInfo?.apiBaseUrl != null;

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>expo template</Text>
          <Text style={styles.title}>{appInfo?.appName}</Text>
        </View>

        {appInfo == null ? (
          <Text style={styles.mutedText}>loading app info</Text>
        ) : (
          <View style={styles.panel}>
            <View style={styles.row}>
              <Text style={styles.label}>environment</Text>
              <Text style={styles.value}>{appInfo.environment}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>slug</Text>
              <Text style={styles.value}>{appInfo.slug}</Text>
            </View>
            {appInfo.apiBaseUrl != null && (
              <View style={styles.row}>
                <Text style={styles.label}>api</Text>
                <Text style={styles.value}>{appInfo.apiBaseUrl}</Text>
              </View>
            )}
          </View>
        )}

        <Pressable
          onPress={() => {
            void appInfoQuery.refetch();
          }}
          style={({ pressed }) => [styles.refreshButton, pressed && styles.refreshButtonPressed]}
        >
          <Text style={styles.refreshButtonText}>Refresh</Text>
        </Pressable>

        <View style={styles.panel}>
          <View style={styles.row}>
            <Text style={styles.label}>request flow</Text>
            <Text style={styles.value}>
              {healthQuery.data == null ? 'health check is idle' : healthQuery.data.status}
            </Text>
            {healthQuery.data != null && (
              <Text style={styles.mutedText}>{healthQuery.data.timestamp}</Text>
            )}
            {healthQuery.error != null && (
              <Text style={styles.errorText}>{healthQuery.error.message}</Text>
            )}
          </View>

          <Pressable
            disabled={!canCheckApi}
            onPress={() => {
              void healthQuery.refetch();
            }}
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.refreshButtonPressed,
              !canCheckApi && styles.disabledButton,
            ]}
          >
            <Text style={styles.secondaryButtonText}>Check API</Text>
          </Pressable>
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
    justifyContent: 'center',
    padding: spacing.lg,
  },
  header: {
    gap: spacing.sm,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0,
  },
  mutedText: {
    color: colors.mutedText,
    fontSize: 16,
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
  refreshButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  refreshButtonPressed: {
    opacity: 0.82,
  },
  refreshButtonText: {
    color: colors.primaryText,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderColor: colors.primary,
    borderRadius: radius.sm,
    borderWidth: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  disabledButton: {
    borderColor: colors.border,
    opacity: 0.55,
  },
  secondaryButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  errorText: {
    color: colors.danger,
    fontSize: 14,
  },
});

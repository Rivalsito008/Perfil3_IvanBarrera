import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../constants/theme';

export default function Loader({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  message: {
    color: colors.textMuted,
    fontSize: 15,
    marginTop: spacing.md,
  },
});

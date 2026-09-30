import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, spacing } from '../constants/theme';

export default function PrimaryButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '700',
  },
});

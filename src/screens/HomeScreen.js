import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import { student } from '../constants/student';
import { colors, spacing } from '../constants/theme';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.title}>Información del estudiante</Text>

      <View style={styles.info}>
        <InfoRow label="Nombre" value={student.name} />
        <InfoRow label="Carnet" value={student.carnet} />
        <InfoRow label="Sección y grupo" value={`${student.section} - ${student.group}`} />
      </View>

      <PrimaryButton label="Ver planetas" onPress={() => navigation.navigate('Planetas')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 28,
    alignSelf: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  info: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xl,
  },
});

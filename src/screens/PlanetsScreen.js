import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import { colors, spacing } from '../constants/theme';
import usePlanets from '../hooks/usePlanets';

export default function PlanetsScreen() {
  const { planets, loading, error, refetch } = usePlanets();

  if (loading && planets.length === 0) {
    return <Loader message="Cargando planetas..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={planets}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          image={item.image}
          description={item.description}
          badge={item.badge}
          badgeColor={item.badgeColor}
        />
      )}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.md,
  },
});

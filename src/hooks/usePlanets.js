import { useMemo } from 'react';

import { PLANETS_URL } from '../constants/api';
import useFetchData from './useFetchData';

// Consume la API de planetas y deja los datos listos para pintarlos en las tarjetas
export default function usePlanets() {
  const { data, loading, error, refetch } = useFetchData(PLANETS_URL);

  const planets = useMemo(
    () =>
      (data?.items ?? []).map((planet) => ({
        id: String(planet.id),
        title: planet.name,
        image: planet.image,
        description: planet.description,
        badge: planet.isDestroyed ? 'Destruido' : 'Intacto',
        badgeColor: planet.isDestroyed ? 'danger' : 'success',
      })),
    [data]
  );

  return { planets, loading, error, refetch };
}

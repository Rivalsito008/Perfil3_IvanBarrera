import { useCallback, useEffect, useRef, useState } from 'react';

// Hook genérico: hace la petición GET a la url y devuelve el estado de la misma
export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const fetchData = useCallback(async () => {
    // Si había una petición en curso se cancela antes de lanzar la nueva
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) {
        throw new Error(`Error ${response.status} al consultar la API`);
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      if (err.name === 'AbortError') return;
      setError(err.message || 'No se pudo conectar con la API');
    } finally {
      if (controllerRef.current === controller) {
        setLoading(false);
      }
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    return () => controllerRef.current?.abort();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

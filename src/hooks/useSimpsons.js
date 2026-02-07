import { useEffect, useState } from 'react';
import { getSimpsonsCollection } from '@/api/simpsonsApi';

export default function useSimpsons() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    getSimpsonsCollection()
      .then((data) => !cancelled && setCharacters(data))
      .catch((error) => !cancelled && setError(error.message))
      .finally(() => !cancelled && setLoading(false));

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    characters,
    loading,
    error,
    ready: !loading && !error && characters.length > 0,
  };
}

import { useRef, useState } from 'react';

const useQuery = <T>(
  query: () => Promise<T>,
  callback: (data: T) => any,
): { isLoading: boolean; data: T | null } => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);
  const requestRef = useRef(false);

  if (requestRef.current) return { isLoading, data };
  requestRef.current = true;

  query()
    .then((json) => {
      setData(json);
      return json;
    })
    .then((json) => callback(json))
    .finally(() => {
      setIsLoading(false);
    });

  return { isLoading, data };
};

export default useQuery;

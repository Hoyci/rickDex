import { useEffect, useState } from 'react';

export default function useDebounce(searchTerm: string, delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(searchTerm), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, delay]);

  return debouncedValue;
}

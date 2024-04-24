import { useState, useEffect } from 'react';

/**
 * Custom hook for debouncing input changes.
 *
 * @param value - The value to be debounced.
 * @param delay - The delay in milliseconds for debouncing.
 * @returns The debounced value.
 * @ExampleUsage const debouncedValue = useDebounce(value, 500);
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

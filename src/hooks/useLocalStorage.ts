import { useState } from 'react';

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

/**
 * Custom hook to persist state in local storage.
 *
 * @param key - The key for storing data in local storage.
 * @param defaultValue - The default value for the state.
 * @returns A tuple with the state and a function to update the state.
 * @exampleUsage const [count, setCount] = useLocalStorageState<number>('count', 0);
 */
export const useLocalStorageState = <T>(
  key: string,
  defaultValue: T,
): [T, SetValue<T>] => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? (JSON.parse(storedValue) as T) : defaultValue;
  const [value, setValue] = useState<T>(initial);

  const setStoredValue: SetValue<T> = newValue => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
};

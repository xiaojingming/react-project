import { useState, useEffect } from 'react';

function useLocalStorage(key: string, value: string) {
  const [message, setMessage] = useState(value);
  useEffect(() => {
    window.localStorage.setItem(key, message);
  }, [message, key]);
  return [message, setMessage];
}

export default useLocalStorage;

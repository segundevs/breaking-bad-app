import { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultValue) => {
  //get stored items from local storage
  const stored = localStorage.getItem(key);
  //check if there's data with the key in local storage
  const initial = stored ? JSON.parse(stored) : defaultValue;

  const [value, setValue] = useState(initial);

  //save data back to local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

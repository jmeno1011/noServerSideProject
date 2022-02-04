import { useEffect, useState } from "react";

function useLocalStorage(key, initailState) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initailState
  );
  
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;

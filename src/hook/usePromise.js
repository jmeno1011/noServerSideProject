import React, { useEffect, useState } from "react";

function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [resolve, setResolve] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolve = await promiseCreator();
        setResolve(resolve);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next line react-hooks/ exhaustive-deps
  }, deps);
  return [loading, resolve, error];
}

export default usePromise;

import { useState } from "react";

const useFetch = (callback) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [loading, execute, error];
};

export default useFetch;

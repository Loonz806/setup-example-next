/* eslint-disable security/detect-object-injection */
import fetch from "node-fetch";
import { useState, useEffect, useRef } from "react";
import { setDataToCache } from "../utils/sessionCache";

const useFetch = (url) => {
  const cache = useRef({});
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setError(`Error occurred: missing url`);
      return;
    }
    const fetchData = async () => {
      setStatus("fetching");
      if (cache.current[url]) {
        const res = cache.current[url];
        setData(res);
        setDataToCache(res);
        setStatus("fetched");
      } else {
        try {
          const response = await fetch(url);
          if (response.status > 200) {
            setError(`Error occurred:`, response.status);
          } else {
            const res = await response.json();
            cache.current[url] = res; // set response in cache;
            setDataToCache(res);
            setData(res);
            setStatus("fetched");
          }
        } catch (err) {
          setError(`Error occurred:`, err);
          setStatus("Errored");
        }
      }
    };

    fetchData();
  }, [url]);

  return { status, data, error };
};

export default useFetch;

import store from "store";

const SESSION_CACHE = "SESSION_CACHE";
const twoWeeks = 1000 * 60 * 60 * 24 * 14;

const currentTime = () => {
  return Date.now();
};

const getSessionCache = () => {
  let sessionCache = {
    data: {},
    nextCleanup: new Date().getTime() + twoWeeks,
  };

  try {
    const data = store.get(SESSION_CACHE);

    if (data) {
      sessionCache = JSON.parse(data);
    }
  } catch (e) {
    console.error(e.message);
  }

  return sessionCache;
};

const setDataToCache = (id, value) => {
  const sessionCache = getSessionCache();
  const data = sessionCache.data;

  const item = {
    id,
    expiry: new Date().getTime() + twoWeeks,
    value,
  };

  data[id] = item;

  try {
    store.set(SESSION_CACHE, JSON.stringify(sessionCache));
  } catch (e) {
    cleanUpStorage(data);
  }
};

const cleanUpStorage = (data) => {
  let isDeleted;
  let oldest;
  let oldestKey;

  // if 14 days have been passed, it removes the cache
  for (const key in data) {
    console.log("key is", key);
    const expiry = data[key].expiry;
    if (expiry && expiry <= currentTime()) {
      delete data[key];
      isDeleted = true;
    }

    // finding the oldest cache in case none of them are expired
    if (!oldest || oldest > expiry) {
      oldest = expiry;
      oldestKey = key;
    }
  }

  // remove the oldest cache if there is no more space in local storage (5 MB)
  if (!isDeleted && oldestKey) {
    delete data[oldestKey];
  }

  store.set(
    SESSION_CACHE,
    JSON.stringify({
      data,
      nextCleanup: currentTime() + twoWeeks,
    }),
  );
};

export { setDataToCache, getSessionCache };

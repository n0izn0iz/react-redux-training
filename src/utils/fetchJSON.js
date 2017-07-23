const fetchJSON = (url, init) => {
  return fetch(url, init).then((response) => {
    if (response.status >= 200 && response.status < 300)
      return response.json();
    else
      return Promise.reject("HTTP Error " + response.status);
  });
};

export default fetchJSON;

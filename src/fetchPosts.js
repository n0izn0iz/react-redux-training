const fetchPosts = (url) => {
  return fetch(url).then((response) => {
    if (response.status >= 200 && response.status < 400)
      return response.json();
    else
      return Promise.reject();
  });
}

export default fetchPosts;

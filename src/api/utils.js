// function, which is just a wrapper of the native fetch:
const fetcher = async (url, token) => {
  if (!token) {
    const response = await fetch(url);
    return await response.json();
  } else {
    const settings = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, settings);
    return await response.json();
  }
};

export default fetcher;

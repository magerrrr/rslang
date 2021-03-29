export const request = async (url: string, config = {}) => {
  try {
    const response = await fetch(url, config);
    return response.json();
  } catch (e) {
    console.log(e.message);
  }
};

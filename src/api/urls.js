export const baseURL = 'https://react-learnwords-app.herokuapp.com';

const urls = {
  auth: {
    signIn: `${baseURL}/signin`,
  },
  words: {
    defaultRoute: `${baseURL}/words`,
    byId: (id) => `${baseURL}/words/${id}`,
  },
  users: {
    defaultRoute: `${baseURL}/users`,
    byId: (id) => `${baseURL}/users/${id}`,
    byIdWithToken: (id) => `${baseURL}/users/${id}/tokens`,
  },
  usersWords: {
    byId: (id) => `${baseURL}/users/${id}/words`,
    byUserIdAndWordId: (userId, wordId) => `${baseURL}/users/${userId}/words/${wordId}`,
  },
};

export default urls;

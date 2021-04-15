const api = require('../api/urls');
const urls = require('../api/urls');

test('Base URL exists', () => {
  expect(api.baseURL).not.toBeUndefined();
});

test('Urls object exists', () => {
  expect(urls).not.toBeUndefined();
});

test('Urls object has property usersWords', () => {
  expect(urls.default).toHaveProperty('usersWords');
});

test('Urls object has property usersStatistics', () => {
  expect(urls.default).toHaveProperty('usersStatistics');
});

test('Urls object has property usersSettings', () => {
  expect(urls.default).toHaveProperty('usersSettings');
});

test('Users statistics object has property byId', () => {
  expect(urls.default.usersStatistics).toHaveProperty('byId');
});

test('Auth route is equal with backend', () => {
  expect(urls.default.auth.signIn).toEqual('https://react-learnwords-app.herokuapp.com/signin');
});

test('Words route is equal with backend', () => {
  expect(urls.default.words.defaultRoute).toEqual(
    'https://react-learnwords-app.herokuapp.com/words',
  );
});

test('Users route is equal with backend', () => {
  expect(urls.default.users.defaultRoute).toEqual(
    'https://react-learnwords-app.herokuapp.com/users',
  );
});

export default Object.freeze({
  MAIN: {
    name: 'Главная',
    route: '/',
  },
  PROFILE: {
    name: 'Профиль',
    route: '/profile',
  },
  TEXTBOOK: {
    name: 'Электронный учебник',
    route: '/textbook',
  },
  WORDBOOK: {
    name: 'Словарь',
    route: '/wordbook',
  },
  STATS: {
    name: 'Статистка',
    route: '/statistics',
  },
  SIGN_IN: {
    name: 'Войти',
    route: '/sign-in',
  },
  SIGN_UP: {
    name: 'Регистрация',
    route: '/sign-up',
  },
  GAMES: {
    name: 'Игры',
    route: '/games',
    subroutes: {
      SAVANNAH: {
        name: 'Саванна',
        route: '/games/savannah',
      },
      SPEAK_IT: {
        name: 'Скажи это',
        route: '/games/speakit/:group?/:page?',
      },
      AUDIO_CHALLENGE: {
        name: 'Аудиовызов',
        route: '/games/audiochallendge',
      },
      SPRINT: {
        name: 'Спринт',
        route: '/games/sprint/:group?/:page?',
      },
    },
  }
});

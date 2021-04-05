export default Object.freeze({
  MAIN: {
    name: 'Главная',
    route: '/',
  },
  PROFILE: {
    name: 'Профиль',
    route: '/profile',
  },
  TEAM: {
    name: 'Наша Команда',
    route: '/our-team',
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
        route: '/games/speakit',
      },
      AUDIO_CHALLENGE: {
        name: 'Аудиовызов',
        route: '/games/audiochallendge',
      },
      SPRINT: {
        name: 'Спринт',
        route: '/games/sprint',
      },
    },
  },
});

const useCheckAuthenticate = () => {
  const currentToken = localStorage.getItem('token');
  return !!currentToken;
};

export default useCheckAuthenticate;

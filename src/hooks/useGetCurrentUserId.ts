import useCheckAuthenticate from './useCheckAuthenticate';

const useGetCurrentUserId = () => {
  const isAuthenticate = useCheckAuthenticate();

  if (!isAuthenticate) {
    return null;
  }
  return localStorage.getItem('userId');
};

export default useGetCurrentUserId;

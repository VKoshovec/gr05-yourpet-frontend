import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { isLoggedIn, isRefreshing, user } = useSelector(state => state.auth);
  return { isLoggedIn, isRefreshing, user };
};
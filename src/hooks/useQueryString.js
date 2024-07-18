import { useSearchParams } from 'react-router-dom';

export const useQueryString = () => {
  // const { search } = useLocation();
  const [searchParams] = useSearchParams();
  const queryObject = Object.fromEntries([...searchParams]);
  return queryObject;
};

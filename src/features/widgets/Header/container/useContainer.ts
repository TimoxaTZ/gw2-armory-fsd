import { useEffect, useState } from 'react';

import { UIPropertyType } from '../ui';
// import {useLocalStorage} from "../../../../utils/hooks/useLocalStorage";

export const useContainer = () => {
  const [currentPagePath, setCurrentPagePath] = useState('/');

  useEffect(() => {
    setCurrentPagePath(document.location.pathname);
  }, [currentPagePath]);

  const token = localStorage.getItem('token');

  const data: UIPropertyType = {
    token,
    currentPagePath,
  };
  return data;
};

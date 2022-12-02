import React, { FC } from 'react';

import { Loading } from '../../../templates/Loading';

type OwnPropertyType = {
  loading: boolean;
  children: React.ReactNode;
};

export const LoadingWrapper: FC<OwnPropertyType> = React.memo(({ children, loading }) => (
  <>{loading ? <Loading /> : children}</>
));

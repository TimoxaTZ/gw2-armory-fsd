import React from 'react';

import { Auth } from '../../features/widgets/Auth';
import { Layout } from '../../layouts';
import { Styled } from '../../styles/DynamicStyledComponent';

export const AuthPage = () => (
  <Layout.Main>
    <Styled.div column>
      <Auth.Container />
    </Styled.div>
  </Layout.Main>
);

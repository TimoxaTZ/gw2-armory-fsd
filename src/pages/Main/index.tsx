import React from 'react';

import { Content } from '../../features/widgets/Content';
import { Layout } from '../../layouts';
import { Styled } from '../../styles/DynamicStyledComponent';

export const MainPage = () => (
  <Layout.Main>
    <Styled.div column>
      <Content.Container />
    </Styled.div>
  </Layout.Main>
);

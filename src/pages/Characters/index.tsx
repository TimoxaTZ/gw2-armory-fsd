import React from 'react';

import { Characters } from '../../features/widgets/Characters';
import { Layout } from '../../layouts';
import { Styled } from '../../styles/DynamicStyledComponent';

export const CharactersPage = () => (
  <Layout.Main>
    <Styled.div column>
      <Characters.Container />
    </Styled.div>
  </Layout.Main>
);

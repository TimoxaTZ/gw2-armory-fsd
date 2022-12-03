import React from 'react';

import { Character } from '../../features/widgets/Character';
import { Layout } from '../../layouts';
import { Styled } from '../../styles/DynamicStyledComponent';

export const CharacterPage = () => (
  <Layout.Main>
    <Styled.div column>
      <Character.Container />
    </Styled.div>
  </Layout.Main>
);

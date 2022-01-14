import React from 'react'

import { Characters } from '../../features/widgets/Characters'
import { Layout } from '../../layouts'
import StyleContainer from '../../styles/StyleContainer'

const CharactersPage = () => {
  return (
    <Layout.Main>
      <StyleContainer column>
        <Characters.Container />
      </StyleContainer>
    </Layout.Main>
  )
}

export default CharactersPage

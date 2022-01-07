import React from 'react'

import { Sample } from '../../features/widgets/_Sample'
import { Layout } from '../../layouts'
import StyleContainer from '../../styles/StyleContainer'

const MainPage = () => {
  return (
    <Layout.Main>
      <StyleContainer column>
         Armory
        {/*<Sample.Container />*/}
      </StyleContainer>
    </Layout.Main>
  )
}

export default MainPage

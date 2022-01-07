import React from 'react'

import { Sample } from '../../features/widgets/_Sample'
import { Layout } from '../../layouts'
import StyleContainer from '../../styles/StyleContainer'

const NotFoundPage = () => {
  return (
    <Layout.Main>
      <StyleContainer column>
          404 NOT FOUND
        {/*<Sample.Container />*/}
      </StyleContainer>
    </Layout.Main>
  )
}

export default NotFoundPage

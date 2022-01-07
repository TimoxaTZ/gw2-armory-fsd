import React from 'react'

import { Sample } from '../../features/widgets/_Sample'
import { Layout } from '../../layouts'
import StyleContainer from '../../styles/StyleContainer'

const TodoPage = () => {
  return (
    <Layout.Main>
      <StyleContainer column>
         TodoPage
        <Sample.Container />
      </StyleContainer>
    </Layout.Main>
  )
}

export default TodoPage

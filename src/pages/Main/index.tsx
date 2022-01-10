import React, {useState} from 'react'

import { Sample } from '../../features/widgets/_Sample'
import { Layout } from '../../layouts'
import StyleContainer from '../../styles/StyleContainer'
import storage, {setStorage} from "../../app/storage/storage";
import { Content } from '../../features/widgets/Content';



const MainPage = () => {

  return (
    <Layout.Main>
      <StyleContainer column>
        <Content.Container />
      </StyleContainer>
    </Layout.Main>
  )
}

export default MainPage

import React from 'react'
import { Layout } from '../../layouts'
import StyleContainer from '../../styles/StyleContainer'
import {Auth} from "../../features/widgets/Auth";

const AuthPage = () => {
  return (
    <Layout.Main>
      <StyleContainer column>
          <Auth.Container/>
      </StyleContainer>
    </Layout.Main>
  )
}

export default AuthPage

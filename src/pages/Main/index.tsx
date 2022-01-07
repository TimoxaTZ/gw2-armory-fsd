import React from 'react'

import { Sample } from '../../features/widgets/_Sample'
import { Layout } from '../../layouts'
import StyleContainer from '../../styles/StyleContainer'
import Button from "../../components/shared/atoms/Button";

const MainPage = () => {
  return (
    <Layout.Main>
      <StyleContainer column>
         Armory
          <Button buttonName={'Test button'} buttonStyle={2} buttonUrl={'/auth'} key={'uniqueButtonKey1'}/>
        {/*<Sample.Container />*/}
      </StyleContainer>
    </Layout.Main>
  )
}

export default MainPage

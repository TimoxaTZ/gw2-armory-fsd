import React, { FC } from 'react'
import { PresentationStyle } from './style'
import StyleContainer from '../../../../styles/StyleContainer'
import StyledButton from "../../../../components/shared/atoms/Button";
import ContentFilling from "../templates/ContentFilling";
import AboutLine from "../templates/AboutLine";

export type UIPropertyType = {}

const UI: FC<UIPropertyType> = props => {
  return <StyleContainer column middle>
            <AboutLine/>
            <ContentFilling/>
            <StyleContainer middle>
                <StyledButton
                    buttonName={'Set Api Token'}
                    buttonStyle={2} buttonUrl={'/auth'}
                    key={'setApiTokenButton'}/>
                {/*<StyledButton*/}
                {/*    buttonName={'Characters'}*/}
                {/*    buttonStyle={2}*/}
                {/*    buttonUrl={'/characters'}*/}
                {/*    key={'charactersButton'}/>*/}
            </StyleContainer>
  </StyleContainer>
}

export default UI

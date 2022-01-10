import React, {FC} from 'react'
import {StyledButtonContainer, StyledButtonBody, StyledNavLinkHighlight} from './style'


type OwnPropertyType = {
  buttonUrl: string
  buttonName: string
  highlightStyle: 1 | 2 ;
  resetStorage?: boolean
}

const HighlightedButton: FC<OwnPropertyType> = (props) => {

  //reset api-token
  if (props.resetStorage) {
    localStorage.clear();
  }

    return (
      <StyledButtonContainer>
              <StyledNavLinkHighlight to={props.buttonUrl} highlightStyle={props.highlightStyle}>
              <StyledButtonBody>
                  {props.buttonName}
              </StyledButtonBody>
          </StyledNavLinkHighlight>
      </StyledButtonContainer>
  )
}

export default HighlightedButton

import React, {FC} from 'react'
import {StyledButtonContainer, StyledButtonBody, StyledNavLinkHighlight} from './style'


type OwnPropertyType = {
  buttonUrl: string
  buttonName: string
  buttonStyle: 1 | 2;
  resetStorage?: boolean
}

const StyledButton: FC<OwnPropertyType> = (props) => {

  if (props.resetStorage) {
    localStorage.clear();
  }

    return (
      <StyledButtonContainer>
            <StyledNavLinkHighlight to={props.buttonUrl} buttonStyle={props.buttonStyle}>
                <StyledButtonBody>
                    {props.buttonName}
                </StyledButtonBody>
            </StyledNavLinkHighlight>
      </StyledButtonContainer>
  )
}

export default StyledButton

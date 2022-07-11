import React, { FC } from 'react'
import { StyledButtonContainer, StyledButtonBody, StyledNavLinkHighlight } from './style'

type OwnPropertyType = {
  buttonUrl: string
  buttonName: string
  highlightStyle: 1 | 2
  resetStorage?: boolean
}

const HighlightedButton: FC<OwnPropertyType> = ({ buttonUrl, resetStorage, buttonName, highlightStyle }) => {
  //reset api-token
  if (resetStorage) {
    localStorage.clear()
  }

  return (
    <StyledButtonContainer>
      <StyledNavLinkHighlight to={buttonUrl} highlightStyle={highlightStyle}>
        <StyledButtonBody>{buttonName}</StyledButtonBody>
      </StyledNavLinkHighlight>
    </StyledButtonContainer>
  )
}

export default HighlightedButton

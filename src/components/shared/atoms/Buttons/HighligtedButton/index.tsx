import { NavLink } from 'react-router-dom'
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
      <NavLink to={buttonUrl}>
        <StyledNavLinkHighlight highlightStyle={highlightStyle}>
          <StyledButtonBody>{buttonName}</StyledButtonBody>
        </StyledNavLinkHighlight>
      </NavLink>
    </StyledButtonContainer>
  )
}

export default HighlightedButton

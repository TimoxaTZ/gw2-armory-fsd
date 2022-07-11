import { StyledButtonContainer, StyledButtonBody, StyledNavLinkHighlight } from './style'

type OwnPropertyType = {
  buttonUrl: string
  buttonName: string
  highlight: 1 | 2
  resetStorage?: boolean
}

const HighlightedButton: FC<OwnPropertyType> = ({ buttonUrl, resetStorage, buttonName, highlight }) => {
  //reset api-token
  if (resetStorage) {
    localStorage.clear()
  }

  return (
    <StyledButtonContainer>
      <StyledNavLinkHighlight to={buttonUrl} highlight={highlight}>
        <StyledButtonBody>{buttonName}</StyledButtonBody>
      </StyledNavLinkHighlight>
    </StyledButtonContainer>
  )
}

export default HighlightedButton

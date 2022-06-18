import { StyledAppContainer, StyledBackground, StyledContainer } from './style'
import { Header } from '../../features/widgets/Header'

const Main: FC = props => {
  return (
    <StyledAppContainer>
      <Header.Container />
      <StyledBackground>
        <StyledContainer>{props.children}</StyledContainer>
      </StyledBackground>
    </StyledAppContainer>
  )
}

export default Main

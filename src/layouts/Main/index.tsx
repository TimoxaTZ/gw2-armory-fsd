import { StyledAppContainer, StyledBackground, StyledContainer } from "./style";
import { Header } from '../../features/widgets/Header';


const Main: FC = ({ children }) => {

  return (
    <StyledAppContainer>
      <Header.Container />
      <StyledBackground>
        <StyledContainer>
          {children}
        </StyledContainer>
      </StyledBackground>
    </StyledAppContainer>
  )
}

export default Main

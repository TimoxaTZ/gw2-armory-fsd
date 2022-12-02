import { Header } from '../../features/widgets/Header';

import { StyledAppContainer, StyledBackground, StyledContainer } from './style';

export const Main: FC = ({ children }) => (
  <StyledAppContainer>
    <Header.Container />
    <StyledBackground>
      <StyledContainer>{children}</StyledContainer>
    </StyledBackground>
  </StyledAppContainer>
);

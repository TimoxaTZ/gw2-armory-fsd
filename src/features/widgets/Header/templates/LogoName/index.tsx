import { StyledLogoName } from './style'

type OwnPropsType = {
  text: string
}

const LogoName: FC<OwnPropsType> = ({ text }) => {
  return <StyledLogoName>{text}</StyledLogoName>
}

export default LogoName

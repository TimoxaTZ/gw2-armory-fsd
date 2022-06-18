import { StyledImg } from './style'
import logo from './../../../../assets/images/logo.jpg'

export type OwnPropsType = {
  src: string
}

const Logo: FC<OwnPropsType> = ({ src }) => {
  return <StyledImg src={src} />
}

export default Logo

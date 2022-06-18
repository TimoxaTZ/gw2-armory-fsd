import { StyledName } from './style'

type OwnPropsType = {
  name: string
}

const CharacterN: FC<OwnPropsType> = ({ name }) => {
  return <StyledName>{name}</StyledName>
}

export default CharacterN

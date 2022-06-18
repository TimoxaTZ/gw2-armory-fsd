import { StyledSimpleButtonBody } from './style'
import { NavLink } from 'react-router-dom'

type OwnPropertyType = {
  buttonUrl?: string
  buttonName: string
  // buttonStyle: 1 | 2 ;
  resetStorage?: boolean
  onClick?: () => void
}

const SimpleButton: FC<OwnPropertyType> = props => {
  if (props.resetStorage) {
    localStorage.clear()
  }

  return (
    <>
      {props.buttonUrl ? (
        <NavLink to={props.buttonUrl}>
          <StyledSimpleButtonBody onClick={props.onClick}>{props.buttonName}</StyledSimpleButtonBody>
        </NavLink>
      ) : (
        <StyledSimpleButtonBody onClick={props.onClick}>{props.buttonName}</StyledSimpleButtonBody>
      )}
    </>
  )
}

export default SimpleButton

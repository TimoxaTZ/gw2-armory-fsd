import React, {FC} from 'react'
import {StyledButtonContainer, StyledButtonNavSpan, StyledNavLink} from './style'


type OwnPropertyType = {
  buttonUrl: string
  buttonName: string
  buttonStyle: 1 | 2;
  resetStorage?: boolean
}

// const highlight = {
//   1: styles.button_style1_nav,
//   2: styles.button_style2_nav
// }

const Button: FC<OwnPropertyType> = (props) => {

  if (props.resetStorage) {
    localStorage.clear();
  }

  return (
      <StyledButtonContainer>
        {/*<NavLink to={props.buttonUrl} className={highlight[props.buttonStyle]}>*/}
        <StyledNavLink to={props.buttonUrl} buttonStyle={props.buttonStyle}>
          <StyledButtonNavSpan>
            {props.buttonName}
          </StyledButtonNavSpan>
        </StyledNavLink>
      </StyledButtonContainer>
  )
}

export default Button

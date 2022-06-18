import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledButtonBody = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  //button color
  background: #0e1538;

  z-index: 10;
  display: flex;
  justify-content: center;
  font-size: 0.95em;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;

  //border color
  border: 1px solid #040a29;

  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.075);
    transform: skew(25deg);
  }
`
type StyledNavLinkPropsType = {
  highlightStyle: 1 | 2
}

export const StyledNavLinkHighlight = styled.div<StyledNavLinkPropsType>`
    position: relative;
    width: 160px;
    height: 60px;
    display: inline-block;
    background: #fff;
    margin: 20px;
    
    &:before, &:after {
      content: '';
      position: absolute;
      inset: 0;
      background: #f00;
      transition: 0.5s;
      background: ${({ highlightStyle }) =>
        highlightStyle === 1
          ? 'linear-gradient(45deg,#ff075b, #0e1538, #0e1538,#1aff22)'
          : highlightStyle === 2 && 'linear-gradient(45deg,#00ccff, #0e1538, #0e1538,#d400d4)'}
    }
    
    }
    &:hover&:before {
      inset: -3px;
    }
    &:hover&:after {
      inset: -3px;
      filter: blur(10px);
    }
`

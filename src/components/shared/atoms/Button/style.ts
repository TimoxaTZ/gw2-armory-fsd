import styled from 'styled-components'
import {NavLink} from "react-router-dom";

export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledSimpleButton = styled.div`
    position: center;

    text-align: center;
    line-height: 1;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    /*толщина рамки и цвет*/
    border: 3px solid #fff;
    /*отступы от рамки*/
    padding: 8px 25px;
    /*position: relative;*/
    color: #fff;
    text-decoration: none;
    /*при изменении цвета он будет проиходить плавно*/
    transition: color 0.2s linear;
    margin-bottom: 20px;
    &:after {
      transition: opacity 0.2s linear;
    };
    &:hover {
    color: black;
    /*border-color: black;*/
    background-color: rgba(255, 255, 255, 0.3);
    transition: color 0.3s linear, background-color 0.3s linear;
    };
    &:hover:after {
      opacity: 1;
    }
`
export const StyledButtonNavSpan = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*display: inline-block;*/
    background: #0e1538;
    z-index: 10;
    display: flex;
    justify-content: center;
    font-size: 0.95em;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    border: 1px solid #040a29;
    overflow: hidden;
    &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.075);
    transform: skew(25deg);
    }
`

/*-----------------------HIGHLIGHT BUTTON STYLE 1------------------------------*/
export const StyledNavLink = styled(NavLink)`
    position: relative;
    width: 160px;
    height: 60px;
    display: inline-block;
    background: #fff;
    margin: 20px;
    &:before {
      &:after {
        content: '';
        position: absolute;
        inset: 0;
        background: #f00;
        transition: 0.5s;
    //background: linear-gradient(45deg,#ff075b, #0e1538, #0e1538,#1aff22);
        background: ${(props: { buttonStyle: 1 | 2 }) => props.buttonStyle === 1
            ? 'linear-gradient(45deg,#ff075b, #0e1538, #0e1538,#1aff22)'
            : props.buttonStyle === 2 && 'linear-gradient(45deg,#00ccff, #0e1538, #0e1538,#d400d4)'}
      }
    }
    &:hover {
      &:before {
       inset: -3px;
      }
    }
    &:hover {
      &:after {
       inset: -3px;
      filter: blur(10px);
    }
  }
`

export const StyleOneNavLink = styled(NavLink)`
    position: relative;
    width: 160px;
    height: 60px;
    display: inline-block;
    background: #fff;
    margin: 20px;
    &:before&:after {
     content: '';
    position: absolute;
    inset: 0;
    background: #f00;
    transition: 0.5s;
    background: linear-gradient(45deg,#ff075b, #0e1538, #0e1538,#1aff22);
    }
    &:hover&:before {
       inset: -3px;
    }
    &:hover&:after {
     inset: -3px;
     filter: blur(10px);
    }
`

export const StyleTwoNavLink = styled(NavLink)`
    position: relative;
    width: 160px;
    height: 60px;
    display: inline-block;
    background: #fff;
    margin: 10px;
    &:before&:after {
    content: '';
    position: absolute;
    inset: 0;
    background: #f00;
    transition: 0.5s;
    background: linear-gradient(45deg,#00ccff, #0e1538, #0e1538,#d400d4);
    }
    &:hover&:before {
      inset: -3px;
    }
    &:hover&:after {
       inset: -3px;
    filter: blur(10px);
    }
`






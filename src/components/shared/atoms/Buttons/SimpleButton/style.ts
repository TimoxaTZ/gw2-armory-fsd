import styled from 'styled-components'
import {NavLink} from "react-router-dom";

export const StyledSimpleButtonBody = styled.button`
    background: rgba(0, 0, 0, 0.15);
    mix-blend-mode: normal;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 8px;
    
    font-family: 'GWTwoFont Version 1.1', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;

    filter: blur(0.1px);
    
    &:after {
      transition: opacity 0.2s linear;
    }
    &:hover {
    color: rgb(0,0,0);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);
    background-color: rgba(255,255,255,0.86);
    border: 1px solid rgb(255,255,255);
    /*border-color: black;*/
    transition: color 0.3s linear, background-color 0.3s , border 0.3s linear ;
    }
    &:hover&:after {
      opacity: 1;
    }
`



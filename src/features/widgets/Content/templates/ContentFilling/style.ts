import styled from 'styled-components'

export const StyledBox = styled.div`
    display: flex;
    width: 55%;
    
    @media only screen and (max-width: 800px) {
      width: 80%;
    }
    @media only screen and (max-width: 600px) {
      width: 90%;
    }
    //position: relative;
    //top: 5%;
   

`

export const StyledTextField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1vw;
    //padding: 1vw 0 1vw 2.2vw;

    //font-size: 24px;
    //font-weight: 400;
    
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    //font-family: "Proza Regular",sans-serif;
    font-family: "GWTwoFont Version 1.1",serif;
    color: rgb(0, 0, 0);
    border: 3px solid rgba(0, 0, 0, 0.58);
    box-sizing: border-box;
    border-radius: 5px;
    filter: blur(0.1px);
    
    background-color: rgba(255, 255, 255, 0.23);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.27);
    &:after {
      transition: opacity 0.2s linear;
    }
    &:hover {
    color: rgba(255, 218, 162, 0.82);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.68);
    border: 3px solid rgba(255, 218, 162, 0.82);
    /*border-color: black;*/
    transition: color 0.3s linear, background-color 0.3s , border 0.3s linear ;
    }
    &:hover&:after {
      opacity: 1;
    }
    
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
`
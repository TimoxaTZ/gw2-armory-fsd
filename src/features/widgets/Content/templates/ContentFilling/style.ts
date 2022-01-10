import styled from 'styled-components'

export const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65vw;

`
export const StyledBoard = styled.div`
   display: flex;
   min-width: 0;
   justify-content: center;
   align-items: center;
`

export const StyledTextfield = styled.div`
    font-size: 25px;
    font-weight: 400;
    font-family: "Proza Regular",sans-serif;
    color: rgb(0, 0, 0);

    padding: 10px;
    border: 5px solid rgba(0, 0, 0, 0.58);
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
    border: 5px solid rgba(255, 218, 162, 0.82);
    /*border-color: black;*/
    transition: color 0.3s linear, background-color 0.3s , border 0.3s linear ;
    }
    &:hover&:after {
      opacity: 1;
    }
`
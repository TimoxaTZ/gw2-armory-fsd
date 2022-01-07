import styled from "styled-components";
import background from '../../assets/images/background_8k.jpg'

export const StyledAppContainer = styled.div`
  overflow: hidden;
  ::-webkit-scrollbar {
        display: none;
  }
`

export const StyledHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.85);
    display: block;
    position: absolute;
    width: 100%;
    height: 10%;
    z-index: 0;
    /*overflow: hidden;*/
`

export const StyledBackground = styled.div`
    position: relative;
    top: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 1;
    overflow:hidden;
    //background-image: url("../../assets/images/background_8k.jpg");
    //background-image: url(${background});
    //opacity: 0.5;
    &:before {
      z-index: -1;
      position:absolute;
      left: 0;
      top: 0;
      //content: url('../../assets/images/background_8k.jpg');
      content: url(${background});
      opacity:0.5;
    }
  
  //  ::-webkit-scrollbar {
  //      display: none;
  //}
`


export const StyledContainer = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Proza Regular";
    font-size: 15px;
    line-height: 1.6;
    color: #333;
    width: 100%;
    height: 90vh;
    z-index: -1000;
    overflow-y: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        display: none;
  }
`
export const StyledProgressbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30%;
`





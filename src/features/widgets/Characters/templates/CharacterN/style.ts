import styled from '@emotion/styled';

export const StyledName = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5vw;

  height: 6vh;
  min-width: 12vw;

  //height: 25%;
  //min-width: 30%;

  padding: 12px;

  @media only screen and (max-width: 1200px) {
    min-width: 40%;
  }

  @media only screen and (max-width: 1000px) {
    min-width: 60%;
  }
  @media only screen and (max-width: 800px) {
    width: 75%;
  }
  @media only screen and (max-width: 480px) {
    width: 90%;
  }

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  //font-family: "Proza Regular",sans-serif;
  font-family: 'GWTwoFont Version 1.1', serif;
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
    color: rgba(245, 245, 240, 0.95);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.68);
    border: 3px solid rgba(245, 245, 240, 0.75);
    -webkit-text-stroke-color: rgba(0, 0, 0, 0.15);
    cursor: pointer;
    /*border-color: black;*/
    transition: color 0.3s linear, background-color 0.3s, border 0.3s linear;
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
`;

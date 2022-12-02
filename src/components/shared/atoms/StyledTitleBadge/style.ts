import styled from '@emotion/styled';

export const StyledName = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  //margin-bottom: 4vh;

  height: 6vh;
  min-width: 12vw;
  margin: 2vh;

  //height: 30%;
  //min-width: 15%;

  padding: 12px;

  @media only screen and (max-width: 340px) {
    width: 80%;
  }

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  font-family: 'GWTwoFont Version 1.1', serif;
  color: rgb(0, 0, 0);
  border: 3px solid rgba(0, 0, 0, 0.58);
  box-sizing: border-box;
  border-radius: 3px;
  filter: blur(0.1px);

  background-color: rgba(93, 245, 41, 0.2);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.2);

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
`;

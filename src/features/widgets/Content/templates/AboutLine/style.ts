import styled from '@emotion/styled';

export const StyledTitleBox = styled.div`
  width: 100%;
  max-width: 880px;
  text-align: center;

  //position: relative;
  //top: 10%

  //background-color: deeppink;
  margin: 0 auto 0;
`;

export const StyledTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'GWTwoFont Version 1.1', serif;

  line-height: 54px;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  text-shadow: 2px 0 0 rgba(51, 95, 219, 0.48);
  filter: blur(0.4px) drop-shadow(0px 4px 2px rgba(210, 0, 0, 0.25));
  &:after {
    content: '';
    width: 64px;
    height: 3px;
    background-color: #fff;
    /*отступ сверху 20, слева справа авто снизу 25*/
    margin: 20px auto 25px;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
`;

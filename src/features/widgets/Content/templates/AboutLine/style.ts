import styled from 'styled-components'

export const StyledTitleBox = styled.div`
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    text-align: center;
`

export const StyledTitle = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "GWTwoFont",serif;
    font-size: 60px;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    color: #fff;
    text-shadow: 3px 0 0 rgba(255, 0, 59, 0.54);
    &:after {
      content: "";
      width: 60px;
      height: 3px;
      background-color: #fff;
      /*отступ сверху 20, слева справа авто снизу 25*/
      margin: 20px auto 25px;
    }
`
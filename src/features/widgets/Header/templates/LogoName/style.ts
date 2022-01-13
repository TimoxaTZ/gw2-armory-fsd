import styled from 'styled-components'

export const StyledLogoName = styled.div`
font-family: 'GWTwoFont Version 1.1',serif;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 37px;

@media only screen and (max-width: 460px) {
      font-size: 24px;
      line-height: 24px;
      text-align: center;
}
  @media only screen and (max-width: 333px) {
      margin: 8px 8px;
      line-height: 24px;
}

color: #FFFFFF;

filter: blur(0.1px);

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
`

import styled from 'styled-components'

export const StyledHeader = styled.div`
  position: absolute;
  height: 10%;
  width: 100%;
  background-color: rgba(0,0,0,0.85);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
  z-index: 0;
  box-shadow: inset 0px 4px 4px 800px rgba(0, 0, 0, 0.25);
  filter: blur(0.1px);   
  //color: white;
`

export const StyledNamedLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
`

export const StyledLogo = styled.img`
    width: 80px;
    height: auto;
    border-radius: 50%;
    margin: 5px 20px;
    opacity: .85;
    
    -webkit-user-drag: none ;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  
  @media only screen and (max-width: 460px) {
      margin: 8px 8px;
      line-height: 24px;
}
  @media only screen and (max-width: 333px) {
      margin: 8px 8px;
      line-height: 24px;
      display: none ;
}
`
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

export const StyledHeaderButtons = styled.div`
  height: 50%;
  padding: 1vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

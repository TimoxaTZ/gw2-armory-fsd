import styled from 'styled-components'

export const StyledImg = styled.img`
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

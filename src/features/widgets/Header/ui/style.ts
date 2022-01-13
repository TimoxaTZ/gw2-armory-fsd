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
export const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
`
export const StyledNavMenu = styled.ul`
  height: 50%;
  padding: 1vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
import React from 'react';
import logo from '../img/new-logo.png';
import { StyledLink } from '../Styles/Button.style';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 10vh;
  margin-bottom: 20px;



  @media only screen and (max-width: 768px){
    height: 8vh;
    margin-bottom: 10px;
  }
`

const HeaderImg = styled.img`
  height: 100%;
  margin: 5px auto;
`

const Header = () => {
  return (
    <StyledHeader>
      <HeaderImg src={logo} alt="Breaking Bad"/>
      <StyledLink b="1px solid #eb7a4f" bhover="1px solid #fff" borderfocus="1px solid #fff" to='/favorites'>Favorites</StyledLink>
    </StyledHeader>
  )
}


export default Header

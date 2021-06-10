import React from 'react';
import errorSVG from '../img/404-white.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ArrowBack } from '../Styles/Button.style';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 50%;
  height: 80%;
  margin: 20px auto;

  @media only screen and (max-width: 768px){
    width: 100%;
    height: 100%;
    
  }
`

const Heading = styled.h2`
  color: #ffffff;
  font-size: 18px;
  margin: 10px auto;
  text-align: center;
`

const ErrorImg = styled.img`
  width: 70%;
  height: 70%;
  margin: 10px auto;
`

const HomeLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: fixed;
  bottom: 20%;
  right: ${props => props.right ? props.right : '0'};

  @media only screen and (max-width: 768px){
    right: ${props => props.smallright ? props.smallright : '0'};
    bottom: 25%;
  }
`
/*
const StyledArrow = styled(FaHome)`
  color: #fff;
  text-decoration: none;
  position: absolute;
  width: 23%;
  bottom: 0;
  right: 40%;
`
*/

const Error = () => {

  return (
    <StyledContainer>
      <ErrorImg src={errorSVG} alt="error"/>
      <Heading>Ooops! Page not found</Heading>
      <HomeLink right="46%" smallright="40%" to="/">Go home
      <ArrowBack right="100%"/>
      </HomeLink>
    </StyledContainer>
  )
}

export default Error

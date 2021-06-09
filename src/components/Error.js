import React from 'react';
import svg from '../img/warning.svg';
import styled from 'styled-components';
import { FaHome } from "react-icons/fa";
import { StyledLink } from '../Styles/Button.style';

const StyledContainer = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  padding: 10px;
  width: 50%;
  height: 450px;
  margin: 10px auto;
`

const Heading = styled.h2`
  color: #272b35;
  font-size: 18px;
  text-align: center;
  align-self: center;
`

const ErrorImg = styled.img`
  width: 70%;
  height: 70%;
  margin: auto 20px;
`

const StyledArrow = styled(FaHome)`
  color: #fff;
  text-decoration: none;
  position: absolute;
  width: 23%;
  bottom: 0;
  right: 40%;
`

const Error = () => {

  return (
    <StyledContainer>
      <Heading>You look lost, let's get you back home</Heading>
      <ErrorImg src={svg} alt="error"/>
      <StyledLink to="/">
        <StyledArrow />Go home
      </StyledLink>
    </StyledContainer>
  )
}

export default Error

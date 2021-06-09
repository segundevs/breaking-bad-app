import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdSend, MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { TiArrowBack } from "react-icons/ti";

export const Button = styled.button`
  position: relative;
  border: none;
  width: ${props => props.w ? props.w : '100px'};
  margin: 10px 5px 0 5px;
  padding: 0.6rem 0.8rem;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  background-color: #eb7a4f;
  color: #fff;
  text-align: center;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: #d6673a;
    outline: none;
    border: none;
  }

  &:focus {
    background-color: #fff;
    color: #eb7a4f;
    outline: none;
    border: none;
  } 
`

export const StyledLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  width: ${props => props.w ? props.w : '100px'};
  background-color: ${props => props.bg ?props.bg : 'transparent'};
  padding: 6px 10px;
  border-radius: 20px;
  border: ${props => props.b ?props.b : 'none'};

  &:hover {
    color: #eb7a4f;
    outline: none;
    border: ${props => props.bhover ?props.bhover : 'none'};
  }

  &:focus {
    outline: none;
    border: ${props => props.borderFocus ?props.borderFocus : 'none'};
  }


  @media only screen and (max-width: 768px){
    font-size: 14px;
    width: 85px;
  }
`

export const Favorite = styled(MdFavorite)`
  color: #fff;
  position: absolute;
  font-size: 30px;
  right: 5%;
  bottom: 5%;
`

export const UnFavorite = styled(MdFavoriteBorder)`
  color: #fff;
  position: absolute;
  font-size: 30px;
  right: 5%;
  bottom: 5%;
`

export const Send = styled(MdSend)`
  position: absolute;
  top: 32%;
  margin-left: 5px;
`

export const ArrowBack = styled(TiArrowBack)`
  color: #fff;
  text-decoration: none;
  width: 30%;
  position: absolute;
  bottom: 10%;
  right: ${props => props.rightPosition ?props.rightPosition : '0'};
`
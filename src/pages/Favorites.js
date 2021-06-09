import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import { FavoritesContext } from '../contexts/FavoritesContext/FavoritesContext';
import { GridContainer } from '../Styles/Character.style';
import styled from 'styled-components';
import { ArrowBack } from '../Styles/Button.style';

const Heading = styled.h1`
  text-align: center;
  margin: 20px auto;
  line-height: 1.8;

@media only screen and (max-width: 768px){
  font-size: 18px;
}
`

const HomeLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: fixed;
  bottom: 0;
  z-index: -10;
  right: ${props => props.rightPosition ? props.rightPosition : '0'};

`

const Favorites = () => {
  
  const {removeUserFavorites, isUserFavorites} = useContext(FavoritesContext);
  
  
  
  const handleOnClick = (param) => {
    const fav = isUserFavorites(param.char_id)
  
    if(fav){
      removeUserFavorites(param.char_id)
    }
  }

  const { userFavorites} = useContext(FavoritesContext)
  return (
    <>
    <Heading>You currently have {userFavorites.length} favorite characters</Heading>
    <GridContainer>
      {userFavorites.map((fav)=>(
        <CharacterCard character={fav} handleOnClick={handleOnClick} isUserFavorites={isUserFavorites}/>
      ))}
    </GridContainer>
    <HomeLink to="/" rightPosition="40%">Go home <ArrowBack rightPosition="100%"/></HomeLink>
    </>
  )
}



export default Favorites

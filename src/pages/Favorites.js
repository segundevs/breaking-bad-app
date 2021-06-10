import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import { FavoritesContext } from '../contexts/FavoritesContext/FavoritesContext';
import { GridContainer } from '../Styles/Character.style';
import styled from 'styled-components';
import { ArrowBack } from '../Styles/Button.style';

const Heading = styled.h1`
  text-align: center;
  margin: 10px auto;
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
  right: ${props => props.right ? props.right : '0'};
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
        <CharacterCard 
        key={fav.char_id} 
        character={fav} 
        handleOnClick={handleOnClick} 
        isUserFavorites={isUserFavorites}
        />
      ))}
    </GridContainer>
    <HomeLink to="/" right="40%">Go home <ArrowBack right="100%"/></HomeLink>
    </>
  )
}



export default Favorites

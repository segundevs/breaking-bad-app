import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext/DataContext';
import { FavoritesContext } from '../contexts/FavoritesContext/FavoritesContext';
import { GridContainer } from '../Styles/Character.style';
import CharacterCard from './CharacterCard';

const Character = () => {
const {characters} = useContext(DataContext);
const { addUserFavorites, removeUserFavorites, isUserFavorites} = useContext(FavoritesContext);

const handleOnClick = (param) => {
  const fav = isUserFavorites(param.char_id)

  if(fav){
    removeUserFavorites(param.char_id)
  }else{
    addUserFavorites(param)
    } 
  } 
 
  return (
    <GridContainer>
      {characters && characters.map((character)=>(
        <CharacterCard character={character} handleOnClick={handleOnClick} isUserFavorites={isUserFavorites}/>
      ))}
    </GridContainer>
  )
}



export default Character
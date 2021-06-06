import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({children}) => {
  const [userFavorites, setUserFavorites] = useState([]);


  const addUserFavorites = (favCharacter) => {
    const newFavorites = [...userFavorites, favCharacter]
    setUserFavorites(newFavorites)  
  };

  const removeUserFavorites = (id) => {
    setUserFavorites(prevUserFav => prevUserFav.filter(character=> character.char_id !== id))
  };

  const isUserFavorites = (id) => {
    return userFavorites.some(character => character.char_id === id)
  };

  return (
    <FavoritesContext.Provider value={{userFavorites, addUserFavorites, removeUserFavorites, isUserFavorites}}>
      { children }
    </FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider

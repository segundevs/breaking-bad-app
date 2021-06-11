import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({children}) => {

  const [userFavorites, setUserFavorites] = useState([]);

  

  useEffect(() => {
    const favoritesList = localStorage.getItem("favorites");

    // fetch favorites users from local storage
    favoritesList !== null
      ? setUserFavorites(JSON.parse(favoritesList))
      : localStorage.setItem("favorites", JSON.stringify(userFavorites))

    }, []);

    

  const addUserFavorites = (favCharacter) => {
    const newFavorites = [...userFavorites, favCharacter];
    setUserFavorites(newFavorites);

    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    console.log(localStorage.setItem('favorites', JSON.stringify(newFavorites)));
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

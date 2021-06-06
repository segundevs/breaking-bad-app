import React, { useContext, useState } from 'react';
import { MdSend, MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';
import { DataContext } from '../contexts/DataContext/DataContext';
import { FavoritesContext } from '../contexts/FavoritesContext/FavoritesContext';

const Character = () => {
const {characters} = useContext(DataContext);
//Get functions to check userFavorites array, add to userFavorites array, remove from userFavorites array
const { addUserFavorites, removeUserFavorites, isUserFavorites} = useContext(FavoritesContext);

//Store the text on the button in a state
const [title, setTitle] = useState(true);

//Handle click event from Adding and Removing from favorites
const handleOnClick = (param) => {

  //First check if the character is already in the userFavorites array
  const fav = isUserFavorites(param.char_id)

  //Remove it from the array if it's already a userFavorite
  if(fav){
    removeUserFavorites(param.char_id)
    setTitle('Add')
  }else{
    //Add it to the array if it's not already a userFavorite and change text to 'Remove'
    addUserFavorites(param)
    setTitle(prevTitle => !prevTitle)
    } 
  } 
 

 
  return (
    <div className="grid-container">
      {characters && characters.map((character)=>(
        <div className="card" key={character.char_id}>
        <img src={character.img} alt=""/>
        <h2>{character.name}</h2>
        <Link to={`/profile/${character.char_id}`}>
        <button className="btn">See More <MdSend style={iconStyle}/></button>
        </Link>
        <button className="btn" onClick={(e)=>{handleOnClick(character)}}>{!title ? 'Remove' : 'Add'}<MdFavorite style={favStyle}/></button>
        </div>
      ))}
    </div>
  )
}

const iconStyle = {
  position: 'absolute',
  top: '32%',
  marginLeft: '5px'
}

const favStyle = {
  color: '#fff',
  position: 'absolute',
  fontSize: '30px',
  right: '5%',
  bottom: '5%'
}

export default Character
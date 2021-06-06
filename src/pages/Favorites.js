import React, { useContext } from 'react';
import { MdSend, MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext/FavoritesContext';

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
    <div>
      <h1>favorites</h1>
      {userFavorites.map((fav)=>(
        <div className="card" key={fav.char_id}>
        <img src={fav.img} alt=""/>
        <h2>{fav.name}</h2>
        <Link to={`/profile/${fav.char_id}`}>
        <button className="btn">See More <MdSend style={iconStyle}/></button>
        </Link>
        <button className="btn" onClick={()=>{handleOnClick(fav)}}>Remove<MdFavorite style={favStyle}/></button>
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

export default Favorites

// <Character character={userFavorites}/>
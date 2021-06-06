import React, { useContext } from 'react';
import Character from '../components/Character';
import Loading from '../components/Loading';
import Error from '../components/Error'
import { DataContext } from '../contexts/DataContext/DataContext';

const Characters = () => {

  const {loading, characters, err} = useContext(DataContext)
  
  return (
    <div>
      {loading && <Loading />}
      {err && <Error />}
      {characters && <Character characters={characters} />}
    </div>
  )
}

export default Characters
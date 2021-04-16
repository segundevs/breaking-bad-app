import Character from './Character';
import Loading from './Loading';
import Error from './Error';

const Characters = ({loading, characters, err}) => {
  return (
    <div>
      {loading && <Loading />}
      {err && <Error />}
      {characters && <Character characters={characters} />}
    </div>
  )
}

export default Characters

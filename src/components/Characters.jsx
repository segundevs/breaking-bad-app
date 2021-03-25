import Character from './Character';
import Loading from './Loading';

const Characters = ({loading, characters, err}) => {
  return (
    <div>
      {loading && <Loading />}
      {err && <h2>Something went wrong</h2>}
      {characters && <Character characters={characters} />}
    </div>
  )
}

export default Characters

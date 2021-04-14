import { MdSend } from "react-icons/md";
import { Link } from 'react-router-dom';

const Character = ({characters}) => {

  return (
    <div className="grid-container">
      {characters && characters.map((character)=>(
        <div className="card" key={character.char_id}>
        <img src={character.img} alt=""/>
        <h2>{character.name}</h2>
        <Link to={`/profile/${character.char_id}`}>
        <button className="btn">See More <MdSend style={iconStyle}/></button>
        </Link>
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

export default Character

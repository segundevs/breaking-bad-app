import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';

const CharacterDetails = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState();
  const [err, setErr] = useState();

  const { id } = useParams();

  useEffect(()=>{
    setLoading(true)
   const fetchProfile = async ()=>{
     try{
    const result = await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    const data = await result.data;
   
      setLoading(false)
      setProfile(data)
    // console.log(result.data)
     } catch(err) {
       setLoading(false)
       setErr(err);
     }
      
   }
   fetchProfile()
  }, [id])

  return (
    <>
      {loading && <Loading />}
      {err && <h1>Sorry, something went wrong fetching that data</h1>}
        {profile && profile.map((profile)=>(
          <section key={profile.char_id} className="character-card">
            <div className="card-image">
              <img src={profile.img} alt={profile.name}/>
              <h2>{profile.name}</h2>
              <h3>Birthday : {profile.birthday}</h3>
            </div>
            <div className="details-card">
              <h1>{profile.category}</h1>
              <h2>Season Appearance<span style={seasons}>{profile.appearance.map((appear)=>(<h3 key={appear.index}>{appear}</h3>))}</span></h2>
              <h2>Occupation<span>{profile.occupation.map((occup)=>(<h4 key={occup.index}>{occup}</h4>))}</span></h2>
              <h2>Portrayed - {profile.portrayed}</h2>
              <h2>Status - {profile.status}</h2>
            </div>
            
          </section>
        ))}
        <Link to="/" style={linkStyle}><FaLongArrowAltLeft /> Go back</Link>
    </>
  )
}

const seasons = {
  display: 'flex',
  justifyContent: 'space-around', 
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  position: 'absolute',
  bottom: '-10px',
  right: '200px'
  
}

export default CharacterDetails

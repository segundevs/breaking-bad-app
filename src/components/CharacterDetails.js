import { useState, useEffect } from 'react';
import axios from 'axios';
import { TiArrowBack } from "react-icons/ti";
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error'

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
        {err && <Error />}
        {profile && profile.map((profile)=>(
          <section className="character-card">
            <div className="card-image" key={profile.char_id}>
              <img src={profile.img} alt={profile.name}/>
              <h2>{profile.name}</h2>
              <h3>Birthday : {profile.birthday}</h3>
            </div>
            <div className="details-card">
              <h1>{profile.category}</h1>
              <h2>Season Appearance: {profile.appearance}</h2>
              <h2>Occupation: <span>{profile.occupation.map((occup)=>(<h4 key={occup.index}>{occup}</h4>))}</span></h2>
              <h2>Portrayed: {profile.portrayed}</h2>
              <h2>Status: {profile.status}</h2>
            </div>
            <Link className="btn" to="/" style={linkStyle}><TiArrowBack /> Go back</Link>
          </section>  
        ))} 
    </>
  )
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  width: '12%',
  position: 'absolute',
  bottom: '0',
  right: '0'  
}

export default CharacterDetails

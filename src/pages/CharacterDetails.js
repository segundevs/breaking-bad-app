import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error'
import { CardImg, CardWrapper, CharacterCard, DetailsCard } from '../Styles/CharacterDetails.style';
import { ArrowBack, StyledLink } from '../Styles/Button.style';

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
          <CharacterCard>
            <CardWrapper key={profile.char_id}>
              <CardImg src={profile.img} alt={profile.name}/>
              <h2>{profile.name}</h2>
              <h3>Birthday : {profile.birthday}</h3>
            </CardWrapper>
            <DetailsCard>
              <h1>{profile.category}</h1>
              <h2>Season Appearance: {profile.appearance}</h2>
              <h2>Occupation: <span>{profile.occupation.map((occup)=>(<h4 key={occup.index}>{occup}</h4>))}</span></h2>
              <h2>Portrayed: {profile.portrayed}</h2>
              <h2>Status: {profile.status}</h2>
            </DetailsCard>
            <StyledLink to="/" ><ArrowBack />Go back</StyledLink>
          </CharacterCard>  
        ))} 
    </>
  )
}

export default CharacterDetails

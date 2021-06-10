import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error'
import { CardImg, CharacterCard, DetailsCard, StyledHeading, StyledTagged } from '../Styles/CharacterDetails.style';
import { StyledLink } from '../Styles/Button.style';

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
     console.log(result.data)
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
          <CharacterCard key={profile.char_id}>
              <CardImg src={profile.img} alt={profile.name}/>
            <DetailsCard>
              <StyledTagged>Name</StyledTagged><StyledHeading>{profile.name}</StyledHeading>
              <StyledTagged bg="#FFB05A">Born</StyledTagged><StyledHeading>{profile.birthday}</StyledHeading>
              <StyledTagged bg="#9371F5">Category</StyledTagged><StyledHeading>{profile.category}</StyledHeading>
              <StyledTagged bg="#F88E8E">Season Appearance</StyledTagged><StyledHeading>{profile.appearance}</StyledHeading>
              <StyledTagged bg="#FEB548">Occupation</StyledTagged> <StyledHeading>{profile.occupation.map((occup)=>(<h4 key={occup.index}>{occup}</h4>))}</StyledHeading>
              <StyledTagged bg="#eb7a4f">Portrayed</StyledTagged><StyledHeading>{profile.portrayed}</StyledHeading>
              <StyledTagged>Status</StyledTagged><StyledHeading>{profile.status}</StyledHeading>
            </DetailsCard>
            <StyledLink to="/">Go back</StyledLink>
          </CharacterCard>  
        ))} 
    </>
  )
}

export default CharacterDetails
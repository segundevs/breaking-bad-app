import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error'
import { CardImg, CharacterCard, DetailsCard, StyledHeading, StyledTag } from '../Styles/CharacterDetails.style';
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
              <StyledTag>Name</StyledTag>
                <StyledHeading>{profile.name}</StyledHeading>
              <StyledTag>Born</StyledTag>
                <StyledHeading>{profile.birthday}</StyledHeading>
              <StyledTag>Category</StyledTag>
                <StyledHeading>{profile.category}</StyledHeading>
              <StyledTag>Season Appearance</StyledTag>
                <StyledHeading>{profile.appearance}</StyledHeading>
              <StyledTag>Occupation</StyledTag>
                <StyledHeading>{profile.occupation}</StyledHeading>
              <StyledTag>Portrayed</StyledTag>
                <StyledHeading>{profile.portrayed}</StyledHeading>
              <StyledTag>Status</StyledTag>
                <StyledHeading>{profile.status}</StyledHeading>
            </DetailsCard>
            <StyledLink to="/home">Go back</StyledLink>
          </CharacterCard>  
        ))} 
    </>
  )
}

export default CharacterDetails
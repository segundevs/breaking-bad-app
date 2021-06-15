import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error'
import { CardImg, CharacterCard, DetailsCard, FlexCardOne, FlexCardTwo, StyledHeading, StyledTag } from '../Styles/CharacterDetails.style';


const StyledLink = styled(Link)`
  position: absolute;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
  width: 100px;
  background-color: transparent;
  right: 5px;
  bottom: 5px;
  padding: 6px 10px;
  border-radius: 20px;
  border: 1px solid #fff;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: #eb7a4f;
    border: 1px solid #eb7a4f;
  }

  &:focus {
    color: #eb7a4f;
    border: 1px solid #eb7a4f;
  }


  @media only screen and (max-width: 768px){
    position: absolute;
    right: 5px;
    top: 94%;
    font-size: 14px;
    width: 80px;
  }
`

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
              <FlexCardOne>
              <StyledTag>Name</StyledTag>
                <StyledHeading>{profile.name}</StyledHeading>
              <StyledTag>Born</StyledTag>
                <StyledHeading>{profile.birthday}</StyledHeading>
              <StyledTag>Category</StyledTag>
                <StyledHeading>{profile.category}</StyledHeading>
              <StyledTag>Season Appearance</StyledTag>
                <StyledHeading>{profile.appearance}</StyledHeading>
                </FlexCardOne>
                <FlexCardTwo>
              <StyledTag>Occupation</StyledTag>
                <StyledHeading>{profile.occupation.map((occup)=>(<h4 key={occup.index}>{occup}</h4>))}</StyledHeading>
              <StyledTag>Portrayed</StyledTag>
                <StyledHeading>{profile.portrayed}</StyledHeading>
              <StyledTag>Status</StyledTag>
                <StyledHeading>{profile.status}</StyledHeading>
                </FlexCardTwo>
                <StyledLink to="/home">Go back</StyledLink>
            </DetailsCard>
          </CharacterCard>  
        ))} 
        
    </>
  )
}

export default CharacterDetails
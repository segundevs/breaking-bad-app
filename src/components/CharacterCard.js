import React from 'react';
import { Button, Favorite, StyledLink, Send, UnFavorite } from '../Styles/Button.style';
import { Card, CardImg, Heading } from '../Styles/CharacterCard.style';

const CharacterCard = ({character, handleOnClick, isUserFavorites}) => {
  
  return (
      <Card key={character.char_id}>
        <CardImg src={character.img} alt="character-image"/>
        <Heading>{character.name}</Heading>
        <StyledLink to={`/profile/${character.char_id}`}>
        <Button w="40%">See More <Send/></Button>
        </StyledLink>
        <Button w="80%" onClick={(e)=>{handleOnClick(character)}}>
          {isUserFavorites(character.char_id) ? 'Remove from Favorites' : 'Add to Favorites'}
          {isUserFavorites(character.char_id) ? <Favorite /> : <UnFavorite />}
        </Button>
      </Card>
  )
}

export default CharacterCard

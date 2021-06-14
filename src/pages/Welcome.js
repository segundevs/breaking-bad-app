import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Loading from '../components/Loading';
import styled from 'styled-components';
import { Button, Send } from '../Styles/Button.style';

const Heading = styled.h1`
  font-size: 48px;
  text-align: center;
  margin: 20px auto;
  line-height: 1.8;

@media only screen and (max-width: 768px){
  font-size: 18px;
}
`

const BtnContainer = styled.div`
  margin: 10% auto;
  width: 300px;

  @media only screen and (max-width: 768px){
    width: 100px;
  }
`

const Wrapper = styled.div`
  width: 70vw;
  margin: 8% auto;

  @media only screen and (max-width: 768px){
    margin: 25% auto;
  }

`


const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  
  const handleOnClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      
      history.push('/home')
    }, 1000)
  }
  
  

  return (
    <Wrapper>
      <Heading>Welcome to Breaking bad</Heading>
      {isLoading && <Loading />}
      {!isLoading && 
      <BtnContainer>
        <Button w="100%" onClick={handleOnClick}>
          Explore <Send />
        </Button>
      </BtnContainer>}
    </Wrapper>
  )
}

export default Welcome

import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Loading from '../components/Loading';
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
  margin: 20px auto;
  line-height: 1.8;

@media only screen and (max-width: 768px){
  font-size: 18px;
}
`

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  setTimeout(() => {
    setIsLoading(false)
    history.push('/home')
  }, 2000)

  return (
    <>
      <Heading>Welcome to Breaking bad</Heading>
      {isLoading && <Loading />}
    </>
  )
}

export default Welcome

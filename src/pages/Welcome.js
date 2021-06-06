import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Loading from '../components/Loading';

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  setTimeout(() => {
    setIsLoading(false)
    history.push('/home')
  }, 2000)

  return (
    <div>
      <h1>Welcome to Breaking bad</h1>
      {isLoading && <Loading />}
    </div>
  )
}

export default Welcome

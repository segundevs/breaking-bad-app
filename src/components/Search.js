import { useState, useContext } from 'react';
import { DataContext } from '../contexts/DataContext/DataContext';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InputField = styled.input`
  margin: 10px auto;
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 0.8rem;
  width: 50%;

  &:focus{
    border: 1px solid #eb7a4f;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
}
`

const Search = () => {
  const { getChar } = useContext(DataContext);

  const [item, setItem] = useState('');
   const handleChange = (query) => {
     setItem(query)
     getChar(query)
   }
  return (
    <Form>
      <InputField 
      placeholder="Search characters"
      type="text"
      value={item}
      onChange={(e)=> handleChange(e.target.value)}
      />
    </Form>
  )
}


export default Search

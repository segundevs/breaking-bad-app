import { useState, useContext } from 'react';
import { DataContext } from '../contexts/DataContext/DataContext';

const Search = () => {
  const { getChar } = useContext(DataContext);

  const [item, setItem] = useState('');
   const handleChange = (query) => {
     setItem(query)
     getChar(query)
   }
  return (
    <form>
      <input className="input-field" 
      placeholder="Search characters"
      type="text"
      value={item}
      onChange={(e)=> handleChange(e.target.value)}
      />
    </form>
  )
}


export default Search

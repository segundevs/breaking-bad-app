import { useState } from 'react';

const Search = ({getChar}) => {

  const [item, setItem] = useState('');
   const handleChange = (query) => {
     setItem(query)
     getChar(query)
   }
  return (
    <form>
      <input className="input-field" 
      type="text"
      value={item}
      onChange={(e)=> handleChange(e.target.value)}
      />
    </form>
  )
}


export default Search

import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState();
  const [char, setChar] = useState('');
  const [err, setErr] = useState();

  useEffect(()=>{
    
    setLoading(true)
   const fetchChar = async ()=>{
     try{
    const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${char}`);
    const data = await result.data;
   
      setLoading(false);
      setCharacters(data);
     } catch(err){
      setLoading(false);
      setErr(err);
     // console.log(err.name);
     }
      
   }
   fetchChar()
          
  }, [char]);

  const getChar = (query) => {
    setChar(query)
  }

  return (
    <DataContext.Provider value={{loading, characters, err, getChar}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContextProvider

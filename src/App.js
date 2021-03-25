import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Header from './components/Header';
import Search from './components/Search';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';

function App() {

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
          
  }, [char])


  
  return (
    <div className="App">
      <Router>
      <Header />
      <Search getChar={(query)=>{setChar(query)}} />
      <Switch>
        <Route exact path="/">
     <Characters loading={loading} characters={characters} err={err}/>
      </Route>
      <Route path="/profile/:id">
        <CharacterDetails />
      </Route>
     </Switch>
     </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import Header from './components/Header';
import Search from './components/Search';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import FavoritesContextProvider from './contexts/FavoritesContext/FavoritesContext';
import Favorites from './pages/Favorites';
import DataContextProvider from './contexts/DataContext/DataContext';
import Error from './components/Error';
import Welcome from './pages/Welcome';

function App() {

  

  
  return (
    <div className="container">
      <DataContextProvider>
        <FavoritesContextProvider>
          <Router>
              <Header />
              <Search />
            <Switch>
              <Route path="/" component={Welcome} exact/>
              <Route path="/home" component={Characters} />
              <Route path="/profile/:id" component={CharacterDetails} />
              <Route path="/favorites" component={Favorites} /> 
              <Route path="*" component={Error} /> 
            </Switch>
          </Router>
      </FavoritesContextProvider>
     </DataContextProvider>
    </div>
  );
}

export default App;

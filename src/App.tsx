import React, { useState } from 'react';
import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { Register } from './register/Register';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { PokeQuiz } from './quiz/PokeQuiz';
import { PokeBag } from './pokeBag/PokeBag';
import { PokeBagContext } from './pokeBag.context';

const App: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const [pokeBag, setPokeBag] = useState<string[]>([]);

  return (
    <PokeBagContext.Provider
      value={{
        pokemons: pokeBag,
        addPokemon: (pokemon: string) => !pokeBag.includes(pokemon) && setPokeBag([...pokeBag, pokemon])
      }}
    >
      <Router>
        <div className="App">
          <Header user={user}/>
          <div className="content">
            <Switch>
              <Route path="/register" component={() => <Register user={user} onUpdateUser={setUser}/>}/>
              <Route path="/quiz" component={() => <PokeQuiz/>}/>
              <Redirect from="/" to="/register"/>
            </Switch>
            <PokeBag/>
          </div>
          <Footer/>
        </div>
      </Router>
    </PokeBagContext.Provider>
  );
};

export default App;

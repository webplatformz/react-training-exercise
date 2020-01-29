import React, { useState } from 'react';
import './App.css';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Register } from '../../pages/register/Register';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { PokeQuiz } from '../../pages/pokeQuiz/PokeQuiz';
import { PokeBag } from '../pokeBag/PokeBag';
import { PokeBagContext } from '../../pokeBag.context';

const App: React.FC = () => {
  const [user, setUser] = useState<string>('');
  const [pokeBag, setPokeBag] = useState<string[]>([]);

  // TODO:
  // add very basic validation and
  // only display bag and allow the user to play the game once user is registered
  return (
    <PokeBagContext.Provider
      value={{
        pokemons: pokeBag,
        addPokemon: (pokemon: string) =>
          !pokeBag.includes(pokemon) && setPokeBag([...pokeBag, pokemon]),
      }}
    >
      <Router>
        <div className="App">
          <Header user={user} />
          <div className="content">
            <Switch>
              <Route
                path="/register"
                component={() => (
                  <Register user={user} onUpdateUser={setUser} />
                )}
              />
              <Route path="/quiz" component={() => <PokeQuiz />} />
              <Redirect from="/" to="/register" />
            </Switch>
            <PokeBag />
          </div>
          <Footer />
        </div>
      </Router>
    </PokeBagContext.Provider>
  );
};

export default App;

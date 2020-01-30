import React, { lazy, useState, Suspense } from 'react';
import './App.css';
import { Header } from '../Header';
import { Footer } from '../Footer';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { PokeBag } from '../pokeBag/PokeBag';
import { PokeBagContext } from '../../pokeBag.context';

const Register = lazy(() => import('../../pages/register/Register'));
const PokeQuiz = lazy(() => import('../../pages/pokeQuiz/PokeQuiz'));

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
              <Route path="/register">
                <Suspense fallback={<div>Loading...</div>}>
                  <Register user={user} onUpdateUser={setUser} />
                </Suspense>
              </Route>
              <Route path="/quiz">
                <Suspense fallback={<div>Loading...</div>}>
                  <PokeQuiz />
                </Suspense>
              </Route>
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

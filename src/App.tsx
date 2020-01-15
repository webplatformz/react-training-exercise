import React, { useState } from 'react';
import './App.css';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Register } from "./register/Register";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Quiz } from "./quiz/Quiz";

const App: React.FC = () => {
  const [user, setUser] = useState<string>('');

  return (
    <Router>
      <div className="App">
        <Header user={user}/>
        <div className="content">
          <Switch>
            <Route path="/register" component={() => <Register user={user} onUpdateUser={setUser}/>}/>
            <Route path="/quiz" component={() => <Quiz/>}/>
            <Redirect from="/" to="/register"/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

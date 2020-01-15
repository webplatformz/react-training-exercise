import React, { useState } from 'react';
import './App.css';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Register } from "./register/Register";

const App: React.FC = () => {
  const [user, setUser] = useState<string>('');

  return (
    <div className="App">
      <Header user={user} />
      <div className="content">
        <Register user={user} onUpdateUser={setUser}/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;

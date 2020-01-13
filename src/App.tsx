import React from 'react';
import './App.css';

interface User {
  name: string;
}

const florin = {
  name: 'Florin',
};

const App: React.FC = () => {

  return (
    <div className="App">
      <Header user={florin}/>
    </div>
  );
};

const Header: React.FC<{user?: User}> = ({ user }) => {
  return (
    <div>
      Hello {user?.name ?? 'nobody'}
    </div>
  );
};

export default App;

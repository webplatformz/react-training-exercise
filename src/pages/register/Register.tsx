import React, { useState } from 'react';

interface RegisterProps {
  user: string;
  onUpdateUser: (user: string) => void;
}

export const Register: React.FC<RegisterProps> = props => {
  const [user, setUser] = useState<string>(props.user);

  function onKeyUp(event: React.KeyboardEvent) {
    if (event.keyCode !== 13) {
      return;
    }

    props.onUpdateUser(user);
  }

  return (
    <div>
      <p>Sign up</p>
      <input
        type="text"
        placeholder="Enter your name to start"
        onChange={event => setUser(event.target.value)}
        onKeyUp={onKeyUp}
        value={user}
        style={{ marginRight: '5px' }}
      />
      <button onClick={() => props.onUpdateUser(user)}>ok</button>
    </div>
  );
};

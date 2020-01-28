import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC<{ user: string }> = ({ user }) => (
  <div className="header">
    Hello, {user || 'stranger'}
    <Link to="/register">Register</Link>
    <Link to="/quiz">Quiz</Link>
  </div>
);

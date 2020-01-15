import React from "react";

export const Header: React.FC<{ user: string }> = ({ user }) => (
  <div className="header">
    Hello, {user || 'nobody'}
  </div>
);
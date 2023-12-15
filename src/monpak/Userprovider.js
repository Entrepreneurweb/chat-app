// UserProvider.js
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    username: 'Utilisateur Anonyme',
    age: 18,
    preferences: {
      theme: 'sombre',
      langue: 'français',
    },
  });

  const updateUser = (newUserData) => {
    setUserData(newUserData);
  };

  return (
    <UserContext.Provider value={{ userData, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

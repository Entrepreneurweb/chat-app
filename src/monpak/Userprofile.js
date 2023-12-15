// UserProfile.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserProfile = () => {
  const { userData, updateUser } = useContext(UserContext);

  const handleUpdateUser = () => {
    // Exemple de mise à jour des préférences utilisateur
    if(userData.preferences.theme==="clair"){
      const newUserData = {
        ...userData,
        preferences: {
          ...userData.preferences,
          theme: 'sombre',
        },
      };
      updateUser(newUserData);

    }else{
      const newUserData = {
        ...userData,
        preferences: {
          ...userData.preferences,
          theme: 'clair',
        },
      };
      updateUser(newUserData);

    }
    
  };

  return (
    <div>
      <h2>Profil utilisateur</h2>
      <p>Nom d'utilisateur: {userData.username}</p>
      <p>Âge: {userData.age}</p>
      <p>Thème préféré: {userData.preferences.theme}</p>
      <p>Langue préférée: {userData.preferences.langue}</p>
      <button onClick={handleUpdateUser}>Mettre à jour le thème</button>
    </div>
  );
};

// ThemeSwitcher.js
//import  { useContext } from 'react';
//import UserContext from './UserContext';

const ThemeSwitcher = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <h2>Switcher de thème</h2>
      <p>Thème actuel: {userData.preferences.theme}</p>
    </div>
  );
};

export { UserProfile, ThemeSwitcher };

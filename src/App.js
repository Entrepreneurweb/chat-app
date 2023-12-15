import logo from './logo.svg';
import './App.css';
import UserContext from './monpak/UserContext';
import UserProvider from './monpak/Userprovider';
import { UserProfile } from './monpak/Userprofile';
import { ThemeSwitcher } from './monpak/Userprofile';
import Auth from './monpak/Auth';
import Formulaire from './monpak/Formulaire';

function App() {
  return (
    <div>
   <p> THIS IS MY FIRST AUTH APP </p>
   
   <Formulaire/>
  </div>
  );
}

export default App;

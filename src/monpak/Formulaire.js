import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, AuthErrorCodes, signOut } from 'firebase/auth';
import { app } from '../config/firebaseConfig';
import Moncontext from './Moncontext';
import { useContext } from 'react';
function Formulaire() {
 
  const [text, settext] = useState('');
  const [password, setPassword] = useState('');
  const [log, setlog] = useState("0");
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [passworderror, setPassworderror]=useState("catch error");
  const{data}=useContext(Moncontext);
  const auth = getAuth(app);

  useEffect(() => {
    // Utilisez la fonction onAuthStateChanged pour détecter les changements d'état de l'authentification
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Si l'utilisateur est connecté, mettez à jour la constante log
      if (user) {
        setlog("1");
      } else {
        setlog("0");
      }
    });

    // Nettoyer l'effet lorsqu'il n'est plus nécessaire
    return () => unsubscribe();
  }, [auth]);
  

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, text, password);
      const user=userCredential.user;
      console.log(user);
      // Signed up successfully
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);

      if (errorCode === AuthErrorCodes.EMAIL_EXISTS) {
        console.log('Setting email error: Email already exists');
        setPassworderror('Email already exists');
      } else {
        console.error('Error signing up:', errorCode, errorMessage);
      }
      
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailLogin, passwordLogin);
      // Login up successfully
      const user = userCredential.user;
      setPassworderror(user.uid)
      console.log('User login:', user);
    } catch (error) {
      const errorCode = error.code;
     
      const errorMessage = error.message;   
      if (error.code === 'auth/wrong-password') {
        console.log('Setting password error: Wrong password');
        setPassworderror("Wrong password");
      } else {
        console.log('Setting generic password error');
        setPassworderror("wrong password/ email");
      }
      
      
    }
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div style={{ alignContent: 'center' }}>
      <div> MON TEXT {log} </div>
      <input
        type='text'
        size={{ width: '50%' }}
        value={text}
        onChange={(e) => {
          settext(e.target.value);
        }}
        placeholder='email'
      />
      <input
        type='text'
        size={{ width: '50%' }}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder='password'
      />

      <button
        onClick={() => {
          handleSignUp();
        }}
      >
        button
      </button>

      <span>
        <div> LOGIN {data.name} </div>
        <input
          type='text'
          size={{ width: '50%' }}
          value={emailLogin}
          onChange={(e) => {
            setEmailLogin(e.target.value);
          }}
          placeholder='email'
        />
        <input
          type='text'
          size={{ width: '50%' }}
          value={passwordLogin}
          onChange={(e) => {
            setPasswordLogin(e.target.value);
          }}
          placeholder='password'
        />

        <button
          onClick={() => {
            handleLogin();
          }}
        >
          button
        </button>
        <div> {passworderror} </div>
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          log out
        </button>
      </span>
    </div>
  );
}

export default Formulaire;
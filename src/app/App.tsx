import React from 'react';
import './App.scss';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase/firebase';

function App() {
  const provider = new GoogleAuthProvider();

  const onClickOnButton = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
      // Handle Errors here.

      });
  };
  const getUser = () => {
    console.log(auth.currentUser);
  };

  return (
    <div className="app">
      <button type="button" onClick={onClickOnButton}>Login</button>
      <button type="button" onClick={getUser}>GetUser</button>
    </div>
  );
}

export default App;

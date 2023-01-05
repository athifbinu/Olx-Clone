import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/FirebaseContext'
import firebase from './firebase/Config'
  <FirebaseContext.Provider value={{firebase}}>
    <App/>
  </FirebaseContext.Provider>

ReactDOM.render(<App />, document.getElementById('root'));

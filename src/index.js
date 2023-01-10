import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseContext} from './store/Context'
import Context from './store/Context'
import firebase from './firebase/Config'

 


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
  
      <FirebaseContext.Provider value={{firebase}}>
         <Context>
          <App/>
         </Context>
        
      </FirebaseContext.Provider>
  
);


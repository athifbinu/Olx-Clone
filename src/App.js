import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login'
import Create from './Components/Create/Create'
import {AuthContext} from './store/Context'
import { FirebaseContext } from './store/Context';

import './App.css';

// /**
//  * ?  =====Import Components=====
//  */
// import Home from './Pages/Home';
// import Signup from './Components/Signup/Signup';
// import Login from './Components/Login/Login';


function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  
  useEffect(()=>{
         firebase.auth().onAuthStateChanged((user)=>{
          setUser(user)
         })
  })
  return (
    <div>
      <Router>
         
      <Route exact path='/'>
        <Home/>
      </Route>
      
      <Route exact path='/Signup'>
        <Signup/>
      </Route>

      <Route exact path='/login'>
        <Login/>
      </Route>

      <Route exact path='/create'>
          <Create/>
      </Route>
         
      </Router>
   
    </div>
  );
}

export default App;

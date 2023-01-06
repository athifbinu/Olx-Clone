import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import Login from './Pages/Login'
import './App.css';

// /**
//  * ?  =====Import Components=====
//  */
// import Home from './Pages/Home';
// import Signup from './Components/Signup/Signup';
// import Login from './Components/Login/Login';



function App() {
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

      </Router>
   
    </div>
  );
}

export default App;

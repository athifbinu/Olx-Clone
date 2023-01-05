import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Components/Signup/Signup';


function App() {
  return (
    <div>
      <Router>
        <Route path='/'>

        <Home/>

        </Route>
      </Router>
   
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Signup from './Pages/Signup'
import Home from './Pages/Home';
import './App.css';

// /**
//  * ?  =====Import Components=====
//  */
// import Home from './Pages/Home';
// import Signup from './Components/Signup/Signup';



function App() {
  return (
    <div>
      <Router>
         <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
       

         </Routes>

      </Router>
   
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {User} from './components/user'; 
import {Login} from './components/login'; 
import {Principal} from './components/principal'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<User/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/principal" element={<Principal/>} />
      </Routes>
    </Router>
  );
}

export default App;


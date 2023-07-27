import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/header/Header';
import Courses from './course/Courses';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/courses' element={<Courses/>}/> 
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Detail from './pages/details/Detail';
import style from './App.module.css';
import Episode from './pages/episode/Episode';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/episode">Episode</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/char/:char_id' element={<Detail />} />
          <Route path="/episode" element={<Episode />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;

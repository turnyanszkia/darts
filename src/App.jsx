import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import { ChessList } from './ChessList';
import { ChessSingle } from './ChessSingle';
import { ChessMod } from './ChessMod';

export const App=()=> {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Sakkozók</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ChessList />} />
        <Route path="/chess/:chessId" element={<ChessSingle />} />
        <Route path="/chess-mod/:chessId" element={<ChessMod />} />
      </Routes>
    </Router>
  );
}

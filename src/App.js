
// eslint-disable-next-line

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import logo from './images/code.svg';
import Todolist from './components/Todolist';
import EditTodo from './components/EditTodo';
import CreateTodo from './components/CreateTodo';
function App () {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <a
            className="navbar-brand"
            href="https://puneethj1729.github.io/Portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} width="50" height="50" alt="Puneeth's Todolist" />
          </a>
          <Link to="/" className="navbar-brand">Todolist</Link>

          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">CreateTask</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route exact path="/"><Todolist /></Route>
        <Route path="/edit/:id"><EditTodo /></Route>
        <Route path="/create"><CreateTodo /></Route>
      </div>
    </Router>
  );
}

export default App;


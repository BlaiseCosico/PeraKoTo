import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import mainBody from "./components/mainPage/mainPage.js"


function App(){
  return (
    <Router>
       <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="google.com" target="_blank">
            <img src={logo} width="30" height="30"/>
          </a>
          <Link to="/" className="navbar-brand">Pera-Ko-To Expense Tracker</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Something</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Something</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>

        
        <Route path="/" exact component={mainBody} />
        </div>

    </Router>
  );
}
export default App;

import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import "./components/mainPage/style.css"

import NetView from "./components/mainPage/netWorth.js"
import AddTransaction from "./components/mainPage/addTransaction.js"
import RecentTransactions from "./components/mainPage/recentTransactions.js"
import loginPage from "./components/loginPage/login.js"
import registrationPage from "./components/loginPage/login.js"


import logo from "./logo.svg";


function App(){

  const [user, setUser] = useState();

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
                <Link to="/register" className="nav-link">Register</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>

        <div className="container">
          <Route path="/register" exact component={registrationPage} />
          <Route path="/login" exact component={loginPage} />

          <div className="row content">
            <div className="col-sm-3">
                
                <Route exact path="/" render={ (props) => (
                  <NetView {...props} user={user} setUser={setUser}/>
                  )}
                />


            </div>

            <div className="col-sm-9">
              <div className="row">
                <Route path="/" exact component={AddTransaction} />
              </div>

              <div className="row">
                <Route exact path="/" render={ (props) => (
                    <RecentTransactions {...props} user={user} setUser={setUser}/>
                    )}
                  />
                {/* <Route path="/" exact component={RecentTransactions} /> */}
              </div>

            </div>
          </div>
        </div>

        <footer className="container-fluid">
          <p>Footer Text</p>
        </footer>


        </div>

    </Router>
  );
}
export default App;

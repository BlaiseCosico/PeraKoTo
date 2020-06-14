import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Transaction from "./Transaction/Transaction.js"

function RecentTransactions() {
    const col9Style = {
        'background-color': 'pink',
        height: "275px",
        overflow: "scroll"
    }
    
    return(
        <Router>
            <div>
                <div class="container-fluid">
                    <div class="row content" >
                        <div class="col-sm-12" style = {col9Style}>
                        <Route path="/" exact component={Transaction} />
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default RecentTransactions;
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"


import Transaction from "./transaction.js"

function RecentTransactions(user, setUser) {
    const col9Style = {
        'backgroundColor': 'pink',
        height: "275px",
        overflow: "scroll"
    }
    
    return(
        <Router>
            <div className="container-fluid panel3">
                <h4><small>Recent Transactions</small></h4>
                <div className="row content" >
                    <div className="col-sm-12" style = {col9Style}>
                    {/* <Route path="/" exact component={Transaction} /> */}

                    <Route exact path="/" render={ (props) => (
                        <Transaction {...props} user={user} setUser={setUser}/>
                        )}
                    />

                    </div>
                </div>
            </div>
        </Router>
    )
}

export default RecentTransactions;
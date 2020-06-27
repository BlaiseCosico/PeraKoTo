import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
import { data } from "jquery";




class Transaction extends React.Component {
    constructor() {
        super();
        
        this.state = {
            'transactions': []
        }
    }

    

    componentDidMount() {
        this.getTransactions();
    }

    getTransactions() {
        fetch('http://localhost:4000/transaction/')
            .then(response => response.json())
            .then(results => this.setState({'transactions': results}));
    }
        render() {
            return (

                <ul style={{padding:0,listStyleType: "none"}}>
                    {this.state.transactions.map(function(transaction, index) {
                        return (
                                <li style={{padding: "8px" ,backgroundColor: "white",margin: "1px"}}>

                        <span className="col-sm-3 transactionDate">{transaction.trans_date}</span>
                        <span className="col-sm-3 transactionName">{transaction.trans_type}</span>
                        <span className="col-sm-3 transactionTags">{transaction.trans_category}</span>
                        <span className="col-sm-3 transactionAmount">{transaction.trans_amount}</span>
                                </li>
                            )
                        } 

                    )}


                </ul>

            
        )
    }
}

export default Transaction
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

function Transaction() {
    const listItem = {
        padding: "8px",
        backgroundColor: "white",
        margin: "1px",
    }

    return(
        <div>
            <ul style={{padding:0,listStyleType: "none"}}>
            <li style={listItem}>
                <span className="col-sm-3 transactionDate">May 5</span>
                <span className="col-sm-3 transactionName">Ding's Wallet</span>
                <span className="col-sm-3 transactionTags">Food</span>
                <span className="col-sm-3 transactionAmount">Php 5,000</span>
            </li>
                <li style={listItem}>Transaction 2</li>
                <li style={listItem}>Transaction 3</li>
                <li style={listItem}>Transaction 4</li>
                <li style={listItem}>Transaction 6</li>
                <li style={listItem}>Transaction 7</li>
                <li style={listItem}>Transaction 8</li>
            </ul>
        </div>
    )
}

export default Transaction;
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Transaction() {
    const listItem = {
        padding: "8px",
        "background-color": "white",
        margin: "1px",
    }

    return(
        <div>
            <ul style={{padding:0,listStyleType: "none"}}>
                <li style={listItem}>Transaction 1</li>
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
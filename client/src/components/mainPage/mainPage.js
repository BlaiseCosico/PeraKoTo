import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import "./style.css"

import panel1 from "./netWorth.js"
import addTransaction from "./addTransaction.js"
import RecentTransactions from "./recentTransactions.js"


function MainBody(){
	return(
		<Router>
			<div className="container">
				<div className="row content">
					<div className="col-sm-3">
						<Route path="/" exact component={panel1} />
					</div>

					<div className="col-sm-9">
						<div className="row">
							<Route path="/" exact component={addTransaction} />
						</div>

						<div className="row">
							<Route path="/" exact component={RecentTransactions} />
						</div>

						

					</div>
				</div>
			</div>

			<footer className="container-fluid">
			<p>Footer Text</p>
			</footer>
		</Router>
	);
}
export default MainBody;



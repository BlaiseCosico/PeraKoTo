import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import RecentTransactions from "./RecentTransactions/RecentTransactions.js"
import "../App.css"

import income from "./income.js"


function MainBody(){
	const col3Style = {
		'backgroundColor': 'red',
		height: '600px'
	};

	const col9Style = {
		'backgroundColor': 'green',
		height: '600px'
	}
	
	return(
	<Router>
		<div class="container-fluid">
			<div class="row content">
				<div class="col-sm-3 sidenav" style = {col3Style}>
					<h1> col-sm-3 </h1>
				</div>

				<div class="col-sm-9" style = {col9Style}>
					<h4><small>Income</small></h4>
					<Route path="/" exact component={income} />

					<h4><small>Recent Transactions</small></h4>
					<Route path="/" exact component={RecentTransactions} />
				</div>
			</div>
		</div>

		<footer class="container-fluid">
		<p>Footer Text</p>
		</footer>

	</Router>
	);
}
export default MainBody;



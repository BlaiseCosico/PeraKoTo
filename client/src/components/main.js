import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import process from "./transactions.js"


function MainBody(){
	const col3Style = {
		'background-color': 'red',
		height: '200px'
	};

	const col9Style = {
		'background-color': 'green',
		height: '200px'
	}
	return(
	<Router>
	<>
		<div class="container-fluid">
	  		<div class="row content">
	    		<div class="col-sm-3 sidenav" style = {col3Style}>
	    			<h1> col-sm-3 </h1>
			    </div>

			    <div class="col-sm-9" style = {col9Style}>
	      		<h4><small>RECENT POSTS</small></h4>

	      		<Route path="/" component={process}/>
	      	</div>



	      </div>
	      	
	    </div>


	    <footer class="container-fluid">
		  <p>Footer Text</p>
		</footer>

	</>
	</Router>
	);
}
export default MainBody;



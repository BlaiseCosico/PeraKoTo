import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

const col3Style = {
	'backgroundColor': 'white',
	padding: "10px",
	"fontWeight": "bold",
	"marginRight": "1px"

}

function handleClick(e, type) {   
	 e.preventDefault();
	 if (type == "income")
	 console.log('The link was clicked.'); 
 };


 
function process(){
	return(
		<div class = "container">
			<ul class = "nav nav-tabs nav-pills">
				<li class = "nav-item col-sm-3" style = {col3Style}><a data-toggle="pill" href="#Income" onClick={handleClick}>Income</a></li>
				<li class = "nav-item col-sm-3"style = {col3Style}><a data-toggle="pill" href="#Expense" onClick={handleClick}>Expense</a></li>
			</ul>

		
			<div class="tab-content">
				<div id="Income" class="tab-pane fade in active">
					<h3>Income</h3>
					<form>
						<div class="form-row">
							<div class="col-md-9 mb-3">
								<label for="Amount">Enter Amount to add</label>
								<input type="number" class="form-control" placeholder="100"/>
							</div>
						</div>

						<div class="form-row">
							<div class="col-md-4 mb-3">
								<label for="date">Date</label>
								<input type="date" class="form-control" id="date" placeholder="Date" required/>
							</div>

							<div class="col-md-4 mb-3">
								<label for="tags">Tags</label>
								<input type="text" class="form-control" id="tags" placeholder="Add Tags.." />
							</div>

							<div class="col-md-4 mb-3">
								<br></br>
								<button class="btn btn-primary btn-lg" type="submit">Submit</button>
							</div>
						</div>
					</form>
				</div>
				<div id="Expense" class="tab-pane fade">
					<h3>Expense</h3>
					<form>
						<div class="form-row">
							<div class="col-md-9 mb-3">
								<label for="Amount">Enter Amount to add</label>
								<input type="number" class="form-control" placeholder="100"/>
							</div>
						</div>

						<div class="form-row">
							<div class="col-md-4 mb-3">
								<label for="date">Date</label>
								<input type="date" class="form-control" id="date" placeholder="Date" required/>
							</div>

							<div class="col-md-4 mb-3">
								<label for="date">Date</label>
								<br></br>
								<button class="btn btn-primary btn-lg" type="submit">Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>

		</div>
	);
};

export default process;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function process(){
	return(
		<div>
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
	);
};

export default process;
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./style.css"

function handleClick(e, type) {   
	 e.preventDefault();
	 if (type === "income")
	 console.log('The link was clicked.'); 
 };

 
function Process(){

	// useEffect(() => {
	// 	fetchItems();
	// }, [])

	// const [items, setItems] = useState([]);

	// const fetchItems = async () => {
	// 	const data = await fetch('http://localhost:4000/transaction');
	// 	const items = await data.json();
	// 	console.log(items);
	// 	setItems(items);
	// };


	return(
		<div className = "container-fluid panel2">
			<br></br>
			<h4> New Transactions </h4>

			<div className = "card">
				<div className = "card-header">
					<ul className = "nav nav-pills">
						<li className = "nav-item">
							<a class="nav-link active" data-toggle="pill" href="#Income" onClick={handleClick}>Income</a>
						</li>

						<li className = "nav-item">
							<a class="nav-link" data-toggle="pill" href="#Expense" onClick={handleClick}>Expense</a>
						</li>
					</ul>
				</div>
			</div>



			<div className="tab-content card-body">
				<div id="Income" className="container tab-pane active">
					<h3 className="card-title">Income</h3>
					<form>
						<div className="form-row">
							<div className="col-md-9 mb-3">
								<label htmlFor="Amount">Enter Amount to add</label>
								<input type="number" className="form-control" placeholder="100"/>
							</div>
						</div>

						<div className="form-row">
							<div className="col-md-4 mb-3">
								<label htmlFor="date">Date</label>
								<input type="date" className="form-control" id="date" placeholder="Date" required/>
							</div>

							<div className="col-md-4 mb-3">
								<label htmlFor="tags">Tags</label>
								<input type="text" className="form-control" id="tags" placeholder="Add Tags.." />
							</div>

							<div className="col-md-4 mb-3">
								<br></br>
								<button className="btn btn-primary btn-lg" type="submit">Add Income</button>
							</div>
						</div>
					</form>
				</div>
				<div id="Expense" className="container tab-pane fade">
					<h3 className="card-title">Expense</h3>
					<form>
						<div className="form-row">
							<div className="col-md-9 mb-3">
								<label htmlFor="Amount">Enter Amount to add</label>
								<input type="number" className="form-control" placeholder="100"/>
							</div>
						</div>

						<div className="form-row">
							<div className="col-md-4 mb-3">
								<label htmlFor="date">Date</label>
								<input type="date" className="form-control" id="date" placeholder="Date" required/>
							</div>

							<div className="col-md-4 mb-3">
								<label htmlFor="tags">Tags</label>
								<input type="text" className="form-control" id="tags" placeholder="Add Tags.." />
							</div>

							<div className="col-md-4 mb-3">
								<br></br>
								<button className="btn btn-primary btn-lg" type="submit">Add Expense</button>
							</div>
						</div>
					</form>
				</div>
			</div>

		</div>
	);
};

export default Process;

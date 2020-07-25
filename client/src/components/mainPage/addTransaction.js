import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./style.css"

import { useInput } from './useInput';
 
function AddTransaction(){

	const [transaction, handleChange] = useInput( { user_id: "test", trans_type: "", trans_amount: "", trans_category: "", trans_note: "", trans_date: ""} );

	const [submit, setSubmit] = useState(false);


	function handleClick(e) {   
		e.preventDefault(); //returns e and does prevent default

		setSubmit(true) //useEffect on button submit
		handleChange(e) //change trans_type to income/expense

	};

	useEffect(() => {
		
		if(submit) postTransaction(transaction);
		
		setSubmit(false)
	}, [submit])

	const postTransaction = async (transaction) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(transaction)
		};
		const response = await fetch('http://localhost:4000/transaction/add', requestOptions);
		const data = await response.json();
		console.log(data)
		console.log(requestOptions.body)
	}


	return(
		<div className = "container-fluid panel2">
			<br></br>
			<h4> New Transactions </h4>

			<div className = "card">
				<div className = "card-header">
					<ul className = "nav nav-pills">
						<li className = "nav-item">
							<a className="nav-link active" data-toggle="pill" href="#Income" onClick={handleClick}>Income</a>
						</li>

						<li className = "nav-item">
							<a className="nav-link" data-toggle="pill" href="#Expense">Expense</a>
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
								<input type="number" className="form-control" placeholder="100" 
									name="trans_amount" 
									value={transaction.trans_amount || ""}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="form-row">
							<div className="col-md-4 mb-3">
								<label htmlFor="date">Date</label>
								<input type="date" className="form-control" id="date" placeholder="Date" 
									name="trans_date" 
									value={transaction.trans_date || ""}
									onChange={handleChange}
								/>
							</div>

							<div className="col-md-4 mb-3">
								<label htmlFor="tags">Tags</label>
								<input type="text" className="form-control" id="tags" placeholder="Add Category.." 
									name="trans_category" 
									value={transaction.trans_category || ""}
									onChange={handleChange}
								/>
							</div>

							<div className="col-md-4 mb-3">
								<br></br>
								<button className="btn btn-primary btn-lg" type="submit" name="trans_type" value="income"  onClick={handleClick}>Add Income</button>
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
								<input type="number" className="form-control" placeholder="100"
									name="trans_amount" 
									value={Math.abs(transaction.trans_amount) * -1 || ""}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className="form-row">
							<div className="col-md-4 mb-3">
								<label htmlFor="date">Date</label>
								<input type="date" className="form-control" id="date" placeholder="Date"
									name="trans_date" 
									value={transaction.trans_date|| ""}
									onChange={handleChange}
								/>
							</div>

							<div className="col-md-4 mb-3">
								<label htmlFor="tags">Tags</label>
								<input type="text" className="form-control" id="tags" placeholder="Add Category.."
									name="trans_category" 
									value={transaction.trans_category || ""}
									onChange={handleChange}
								/>
							</div>

							<div className="col-md-4 mb-3">
								<br></br>
								<button className="btn btn-primary btn-lg" type="submit" name="trans_type" value="expense"  onClick={handleClick}>Add Expense</button>
							</div>
						</div>
					</form>
				</div>
			</div>

		</div>
	);
};

export default AddTransaction;

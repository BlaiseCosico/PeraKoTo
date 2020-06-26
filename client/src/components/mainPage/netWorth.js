import React, { useState, useEffect } from "react";


function NetView(){

    const [net, setNet] = useState();
    const [user, setUser] = useState();

	useEffect(() => {
		fetchItems();
	}, [user])

	const fetchItems = async () => {
        //hack

        console.log("user>>>>", user)

		const data = await fetch(`http://localhost:4000/net/getnet/${user}`); //does not go away when clearning field
        const amount = await data.json();
        console.log(typeof amount == "object");
        if ( !(typeof amount == "object") ) setNet(amount);
        else setNet("")
		
	};

    console.log("net: " +net)
    return(
        <div className="Container-fluid">
            
            <input 
                name="user"
                placeholder="username"
                value={user}
                onChange={e => setUser(e.target.value)}
            />

            <div>{user}</div>
            <div>
                <h4>Current Funds <span className="badge badge-success">{net}</span></h4>
            </div>
            
            <div className="card">
                <div className="card-header">
                    Top 5 Tags
                </div>

                <div className="list-group">

                    <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                    <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                    <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                    
                </div>
            </div>

        </div>
    );
}

export default NetView


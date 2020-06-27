import React, { useState, useEffect } from "react";
import TopCategories from "./topCategories";

function NetView(){

    const [net, setNet] = useState();
    const [user, setUser] = useState();
    const [categories, setCategories] = useState({})

	useEffect(() => {
        fetchNewWorth();
        fetchTopCategories();
	}, [user])

	const fetchNewWorth = async () => {
        try{
            const data = await fetch(`http://localhost:4000/net/getnet/${user}`); //does not go away when clearning field
            const amount = await data.json();
            if ( !(typeof amount == "object") ) setNet(amount);
            else setNet("")
        }catch(err){
            console.log(err);
        }
    };

    const fetchTopCategories = async () => {
        try{
            const data = await fetch(`http://localhost:4000/net/top5/${user}`);
            const top5 = await data.json();
            setCategories(top5)
        }catch(err){
            console.log(err);
        }

    }
// var sortedKeys = Object.keys(myobj).sort(); gives u a list of keys
    console.log("net: " +net);
    console.log('bills: '+categories[Object.keys(categories)[0]]) //not all browsers might support this
    
    console.log('investment: '+categories.investment)
    console.log('food: '+categories.food)
    
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
                        {Object.entries(categories).map( ([id, val]) => 
                            <TopCategories id = {id} value = {val} />
                        //object.enteries() gives me a list, so that means i can map it
                        )}
                    
                </div>
            </div>

        </div>
    );
}

export default NetView


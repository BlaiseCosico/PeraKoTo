import React, { useState, useEffect } from "react";
import TopCategories from "./topCategories";

function NetView({user, setUser}){

    const [net, setNet] = useState();
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
    return(
        <div className="Container-fluid">
            
            <input 
                name="user"
                placeholder="username"
                value={user || ''}
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

                
                {Object.entries(categories).map( ([id, val]) => 
                    <TopCategories key = {id} id = {id} value = {val} />
                //object.enteries() gives me a list, so that means i can map it
                )}
                    
                
            </div>

        </div>
    );
}

export default NetView;


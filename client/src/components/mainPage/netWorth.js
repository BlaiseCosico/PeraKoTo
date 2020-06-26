import React, { useState, useEffect } from "react";


function NetView(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://localhost:4000/transaction")
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result.items);
            }
          )
      }, [])

    console.log(items)

    return(
        <div className="Container-fluid">
            <div>
                <h4>Current Funds <span className="badge badge-success">P200</span></h4>
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


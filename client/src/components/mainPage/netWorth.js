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
            <h4>Current Funds <span class="badge badge-success">P200</span></h4>
            </div>
            
            <div>
                <h1>Top 5 Tags</h1>
                <ul>
                    <li>Tag 1</li>
                </ul>
            
            </div>

        </div>
    );
}

export default NetView
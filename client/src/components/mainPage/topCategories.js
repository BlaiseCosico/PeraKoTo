import React from 'react';

const TopCategories = ({id, value}) => {
    return(
        <div className="list-group">

            <a href="#" class="list-group-item list-group-item-action">{id} : {value} </a>

        
        </div>
    );
};

export default TopCategories
import React from 'react';

const TopCategories = ({id, value}) => {
    return(
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action" key={id}>{id} : {value} </a>
        </div>
    );
};

export default TopCategories
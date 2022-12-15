import React from 'react';

const GoodsCard = (props) => {
    return (
        <div className="card">
            <p><img src={props.item.image}/></p>
            <p>{props.item.name}</p>
            <p>{props.item.price}</p>
        </div>
    );
};

export default GoodsCard;
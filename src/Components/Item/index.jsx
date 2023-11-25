import './Item.css';

import React from 'react';


const Item = ({info}) => {
    return (
        <div className='film'>
                <img src={info.imagen} />
                <p>{info.producto}</p>
                <span>{info.precio}</span>
                
        </div>
    )
}

export default Item

import "./ItemList.css";
import Item from '../Item'
import React from 'react'

const ItemList = ({ data = [] }) => {
    return (
        <div className="cards-container">
            {data.map(film => (
                <Item key={film.id} info={film} />
            ))}
        </div>
    );
}
    export default ItemList;

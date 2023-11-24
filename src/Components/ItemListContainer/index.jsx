import Item from 'react'
import Title from "../Title";
import ItemCount from '../ItemCount';

export const ItemListContainer = () => {
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }

    return (
        <>
            <Title greeting='Joaquin' />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;
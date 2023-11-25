import ItemDeatail from '../ItemDetail';
import React, { useEffect, useState } from 'react'


const film = [
    {
        id: 1,
        producto: "Gomitas",
        categoria: "Golosionas",
        precio: 10,
        cantidad: 1000,
        imagen: process.env.PUBLIC_URL + '/Img/gomitas.jpg',
        descripcion: "Gomitas multifrutas azucaradas",
    }]

export const ItemDeatailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])

    return (
        <div>
            <ItemDeatail data={data} />
        </div>
    )
}

export default ItemDeatailContainer;

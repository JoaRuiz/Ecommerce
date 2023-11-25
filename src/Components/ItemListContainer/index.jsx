import ItemCount from '../ItemCount';
import ItemList from "../ItemList";
import React, { useState, useEffect } from 'react'
import Title from "../Title";
import { useParams } from 'react-router-dom'


const films = [
    {
        id: 1,
        producto: "Gomitas",
        categoria: "Golosionas",
        precio: 10,
        cantidad: 1000,
        imagen: process.env.PUBLIC_URL + '/Img/gomitas.jpg',
        descripcion: "Gomitas multifrutas azucaradas",
    },
    {
        id: 2,
        producto: "Caramelos",
        categoria: "Golosionas",
        precio: 12,
        cantidad: 1500,
        imagen: process.env.PUBLIC_URL + '/Img/caramelos.jpg',
        descripcion: "Caramelos multifrutas",
    },
    {
        id: 3,
        producto: "Chicles",
        categoria: "Golosionas",
        precio: 20,
        cantidad: 1250,
        imagen: process.env.PUBLIC_URL + '/Img/chicles.jpg',
        descripcion: "Chicles sabor menta",
    },
    {
        id: 4,
        producto: "Milka",
        categoria: "Chcoclates",
        precio: 500,
        cantidad: 250,
        imagen: process.env.PUBLIC_URL + '/Img/milka.jpg',
        descripcion: "Barra de chocolate milka",
    },
    {
        id: 5,
        producto: "Block",
        categoria: "Chocolates",
        precio: 450,
        Cantidad: 300,
        imagen: process.env.PUBLIC_URL + '/Img/block.jpg',
        descripcion: "Barra de chocolate block",
    },
    {
        id: 6,
        producto: "Marroc",
        categoria: "Chocolates",
        precio: 250,
        cantidad: 700,
        imagen: process.env.PUBLIC_URL + '/Img/marroc.jpg',
        descripcion: "Unidad de chocolate marroc",
    },
    {
        id: 7,
        producto: "CocaCola",
        categoria: "Bebidas",
        precio: 600,
        cantidad: 400,
        imagen: process.env.PUBLIC_URL + '/Img/cocacola.jpg',
        descripcion: "Gaseosa CocaCola de 2L",
    },
    {
        id: 8,
        producto: "Pritty",
        categoria: "Bebidas",
        precio: 450,
        cantidad: 400,
        imagen: process.env.PUBLIC_URL + '/Img/pritty.jpg',
        descripcion: "Gaseosa Pritty Limon de 2L.",
    },
    {
        id: 9,
        producto: "Sprite",
        categoria: "Gaseosas",
        precio: 550,
        cantidad: 400,
        imagen: process.env.PUBLIC_URL + '/Img/sprite.jpg',
        descripcion: "Gaseosa Sprite Limon de 2L",
    },
    {
        id: 10,
        producto: "Peluches",
        categoria: "Regaleria",
        precio: 2000,
        cantidad: 100,
        imagen: process.env.PUBLIC_URL + '/Img/peluches.jpg',
        descripcion: "Peluches de distintos colores y formas",
    },
    {
        id: 11,
        producto: "Termos",
        categoria: "Regaleria",
        precio: 2500,
        cantidad: 100,
        imagen: process.env.PUBLIC_URL + '/Img/termos.jpg',
        descripcion: "Termos de distintos colores",
    },
    {
        id: 12,
        producto: "Vasos",
        categoria: "Regaleria",
        precio: 400,
        cantidad: 100,
        imagen: process.env.PUBLIC_URL + '/Img/vasos.jpg',
        descripcion: "Vasos de distintos colores y formas",
    },
];

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    const { categoriaId } = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(films => films.categoria === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoriaId])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }
    return (
        <>
            <Title greeting='Joaquin' />
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;
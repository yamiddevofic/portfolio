// src/Products.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:4000/datos');
                setUsuarios(response.data);
            } catch (error) {
                console.error('Error al obtener productos:', error);
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {usuarios.map(product => (
                    <li key={product.id}>
                        {product.nombre} - {product.correo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;

import React, { useState } from 'react';
import { useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import "./productos.css"


export const ProductList = ({ allProducts, setAllProducts }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect( () =>{

        const fetchdata = async () => {
            try {
                const respuesta = await axios.get("/app/autenticacion/productos");
                setData(respuesta.data)
                
            } catch (error) {
                console.log("Error")
                
            }

        }
        fetchdata();
    }, [])

    const openModal = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    };

    const onAddProducts = () => {
        console.log('Add');
    };

    // useEffect(getProducts, [])

    function addToCart (product){

        /*
        Eliminar un producto del carrito por completo

        function eliminarProducto(id) {
            let products = JSON.parse(localStorage.getItem('products'))
            product.filter(product => product.id !== id)
            localStorage.setItem('products', JSON.stringify(products))
        }

        function RestarUnaUnidad(id) {
            let products = JSON.parse(localStorage.getItem('products'))
            products.forEach(p => {
                if (p.id === product.id) {
                    p.quantity--;
                }

                if (p.quantity <= 0) {
                   eliminarProducto(id) 
                }
            });
            localStorage.setItem('products', JSON.stringify(products))
        }

        */

        const products = JSON.parse(localStorage.getItem('products'))
        const isInProducts = products.some(p => p.id === product.id);

        if (isInProducts) {
            products.forEach(p => {
                if (p.id === product.id) {
                    p.quantity++;
                }
            });
        } else {
            products.push({
                id: product.id,
                name: product.nameProduct,
                price: product.price,
                img: product.urlImage,
                quantity: 1
            })
        }

        localStorage.setItem('products', JSON.stringify(products))
    }

    return (
        <div className='container-items'>
            {/* <button type='button' onClick={useEffect}>Refresh</button> */}
            {data.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.urlImage} alt={product.nameProduct} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.nameProduct}</h2>
                        <button className='btn-info' onClick={() => openModal(product)}>
                            Info
                        </button>
                        <button onClick={() => addToCart (product)}>Add to Cart</button>
                        {/* <button onClick={() => onAddProducts()}>
                            Añadir a favoritos
                        </button> */}
                        <Link to= {`/editProduct/${product.id}`}>Edit</Link>
                        <Link to="/createProduct">Create Product</Link> 
                        

                    </div>
                </div>
            ))}

            {/* Modal */}
            {modalOpen && selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedProduct.nameProduct}</h2>
                        <img src={selectedProduct.urlImage} alt={selectedProduct.nameProduct} />
                        {/* Más detalles del perro */}
                        <p>{selectedProduct.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

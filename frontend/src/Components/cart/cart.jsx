import { useState, useEffect } from "react";
import "../CartContent/CartContent.css";
import "./cart.css";

const Cart = () => {
    // Usamos useState para gestionar el estado del carrito.
    const [cart, setCart] = useState([]);

    // Cargar los productos desde localStorage cuando el componente se monta.
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        setCart(products);
    }, []);

    // Función para actualizar el carrito en localStorage y en el estado.
    const updateCart = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem('products', JSON.stringify(updatedCart));
    };

    // Función para eliminar un producto completamente.
    const eliminarProducto = (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        updateCart(updatedCart);
    };

    // Función para reducir la cantidad de un producto.
    const restarUnaUnidad = (id) => {
        const updatedCart = cart.map(product => {
            if (product.id === id) {
                // Reducimos la cantidad solo si es mayor a 1.
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        }).filter(product => product.quantity > 0); // Eliminar productos con cantidad <= 0

        updateCart(updatedCart);
    };

    return cart.map((product) => (
        <div className="item-properties" key={product.id}>
            <div className="cartContent" key={product.id}>
                <img src={product.img} alt="product-card" />
                <h3 className="name">{product.name}</h3>
                <h4 className="price">{product.price * product.quantity}$</h4>
                <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                <button onClick={() => restarUnaUnidad(product.id)}>Sacar uno</button>
            </div>
        </div>
    ));
};

export default Cart;

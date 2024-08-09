import "./CartContent.css";
import emptyCartImg from "../../multimedia/empty_cart_img.png"

import { Link } from 'react-router-dom';

export default function EmptyCartImg() {
    return (
        <div className="empty-cart-page">
            <h2 className="cart-empty-message">Carrito Vacío</h2>
            <div className="empty-cart">
                <img src={emptyCartImg} alt="empty-cart-image"/>
            </div>
            <h4 className="empty-message">Ups! Parece que tu carrito esta vacio. Vuelve al <Link to="/">Inicio</Link> para comenzar a añadir productos</h4>
        </div>


    );
}
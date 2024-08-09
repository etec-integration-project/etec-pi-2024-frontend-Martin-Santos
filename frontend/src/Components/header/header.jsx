import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../multimedia/logo.png"
// import TotalItems from "../CartContent/TotalItems";
// import { useContext, useEffect } from "react";
// import { dataContext } from "../Context/DataContext";


export default function Header() {
        // const { cart } = useContext(dataContext);

        // useEffect(() => {
        //     setup();
        // }, []);

    return (
        <header className="header">
      
            <div className="logo-title">
                
                <Link to="/" className="title">
                    <img className="logo" src={logo}  alt="logo-ecommerce" />
                    <h1>Fottik</h1>

                </Link>
                
                
            </div>

            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">
                            <h3>HOME</h3>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/productos">
                            <h3>PRODUCTOS</h3>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/login">
                            <h3>Login</h3>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart">
                            <h3>
                                <i class= "fas fa-shopping-cart"/>
                            </h3>
                            {/* {cart.length > 0 ? <TotalItems/> : null} */}
                        </Link>
                    </li>
                </ul>

            </div>

        </header>
        
    );
};

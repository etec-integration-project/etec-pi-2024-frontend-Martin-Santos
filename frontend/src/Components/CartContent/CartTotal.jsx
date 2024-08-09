import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";

const CartTotal = () => {
    const { cart } = useContext(dataContext);

    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

    return (
    <div className="cartTotal">
        <h3>Total: {total}$</h3>
        <button>Comprar Todo</button>
    </div>
    )
};

export default CartTotal;
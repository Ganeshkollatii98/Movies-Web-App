import React from "react";
import { ReactDOM } from "react";
import CartItem from "./CartItem";
import Navbar from "./Navbar";
import "./Cart.css";
const Cart = (props) => {
  console.log("cart component", props);
  const { products } = props;
  return (
    <div className="Cart">
      {products.map((product) => {
        //here we need to give parameter as key with id it stores unique id for every component
        return (
          <CartItem
            prod={product}
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteButton={props.onDeleteButton}
            onUpdatedPrice={props.onUpdatedPrice}
          />
        );
      })}
    </div>
  );
};
export default Cart;

import React from "react";
import { ReactDOM } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      ItemData: [
        {
          prod_name: "Shampoo",
          prod_price: 20.22,
          prod_qty: 2,
          id:1
        },
        {
          prod_name: "Soap",
          prod_price: 30,
          prod_qty: 3,
          id:2
        },
        {
          prod_name: "washing soap",
          prod_price: 10.5,
          prod_qty: 1,
          id:3
        },
        {
          prod_name: "Shurp",
          prod_price: 40.9,
          prod_qty: 5,
          id:4
        }
      ],
    };
  }
  render() {
    const products  = this.state.ItemData;
    return (
      <div className="Cart">
        
     {products.map((product)=>{
         //here we need to give parameter as key with id it stores unique id for every component
         return <CartItem prod={product}  key={product.id}/>
     })}

      </div>
    );
  }
}
export default Cart;

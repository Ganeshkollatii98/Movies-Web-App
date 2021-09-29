import React from "react";
import { ReactDOM } from "react";
import CartItem from "./CartItem";
import "./Cart.css"
class Cart extends React.Component{
  
     render(){
         return (
             <div className="Cart">
                
                    <CartItem />
                      <CartItem />
                        <CartItem />
       
             </div>
         )
     }
}
export default Cart;
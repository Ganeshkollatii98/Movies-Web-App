import React from "react";
import "./CartItem.css";
const CartItem= (props)=> {
   console.log("this is props cart items",props.onUpdatedPrice)

   
    return (
      
      <div className="cart-item">
        <div className="cart-item__left-block">
          <img style={styles.image} src={props.prod.prod_img}/>
        </div>
        <div className="cart-item__right-block">
          <div className="procut-name">{props.prod.prod_name}</div>
          <div className="product-price">Price: {
            props.prod.prod_price
          }</div>
          <div className="product-qty">Qty: {props.prod.prod_qty}</div>
          <div>
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png"
              onClick={()=>props.onIncreaseQuantity(props.prod)
              //()=>props.onPriceIncreDecreOnCartItem("+",props.prod)
              }
            ></img>
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
             onClick={()=>
               props.onDecreaseQuantity(props.prod)

            //  props.onPriceIncreDecreOnCartItem("-",props.prod);

             }></img>
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
              onClick={()=>props.onDeleteButton(props.prod)}
            ></img>
          </div>
        </div>
      </div>
    );
  }


const styles = {
  image: {
    height: 100 + "%",
    width: 100 + "%",
    borderRadius: 4,
    background: "#ccc",
  },
};
export default CartItem;

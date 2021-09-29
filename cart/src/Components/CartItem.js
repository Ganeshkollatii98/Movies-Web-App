import React from "react";
import "./CartItem.css";
class CartItem extends React.Component{
    constructor(){
        super();
          this.state=[
            {
              prod_name:"Shampoo",
              prod_price:20.22,
              prod_qty:2,
              img:''
            },
            {
              prod_name:"Soap",
              prod_price:30,
              prod_qty:3,
              img:''
            },
            {
              prod_name:"washing soap",
              prod_price:10.5,
              prod_qty:1,
              img:''
            },
            {
              prod_name:"Shurp",
              prod_price:40.9,
              prod_qty:5,
              img:''
            }
        
          ];
    }
    render(){
        const CartData=this.state;
        return (
            
            <div className="cart-item">
             <div className="cart-item__left-block">
                   <img style={styles.image}/>
             </div>
             <div className="cart-item__right-block">
                 <div className="procut-name">
                    {CartData[0].prod_name}
                 </div>  
                 <div className="product-price">Price: {CartData[0].prod_price}</div>
                 <div className="product-qty">Qty: {CartData[0].prod_qty}</div>
                 <div>
                     <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png"></img>
                     <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"></img>
                     <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"></img>
                     
                 </div>
             </div>
            </div>
        );     
    }
}

const styles= {
    image:{
        height:100+'%',
        width:100+'%',
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;
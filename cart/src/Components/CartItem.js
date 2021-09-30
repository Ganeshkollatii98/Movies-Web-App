import React from "react";
import "./CartItem.css";
class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      prod_name: "Shampoo",
      prod_price: 20.22,
      prod_qty: 2,
      img: "",
    };
   
  }
  increaseQty = () => {
    // method 1 of using setState
  
    this.setState({
      prod_qty:this.state.prod_qty+1
    })
 
  };
  decreaseQty =()=>{
     // Method 2 of using setState
     this.setState((prevstate)=>{
       if(this.state.prod_qty!==1){
        return {
          prod_qty:this.state.prod_qty-1
      }
       }
       else{
        return {
          prod_qty:this.state.prod_qty
      }
       }
        
     })
  }
  
  render() {
    console.log(this.props)
    const { prod_name, prod_price, prod_qty } = this.state;
    return (
      
      <div className="cart-item">
        <div className="cart-item__left-block">
          <img style={styles.image} />
        </div>
        <div className="cart-item__right-block">
          <div className="procut-name">{this.props.prod.prod_name}</div>
          <div className="product-price">Price: {this.props.prod.prod_price}</div>
          <div className="product-qty">Qty: {this.props.prod.prod_qty}</div>
          <div>
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828926.png"
              onClick={this.increaseQty}
            ></img>
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
             onClick={this.decreaseQty}></img>
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            ></img>
          </div>
        </div>
      </div>
    );
  }
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

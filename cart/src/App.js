import "./index.css";

import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import React from "react";
import firebase from "firebase";
import { firestore } from "firebase/app";
import "firebase/firestore";
class App extends React.Component {
  constructor() {
    super();
    this.prod_updated_price = 0;
    this.state = {
      loading: true,
      products: [],
    };
  }
  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      
      .orderBy('prod_price','asc')
      .onSnapshot((snapshot) => {
        console.log("firebase fucked me", snapshot.docs);
        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });
        //fetching data to products array;
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });

        this.setState({
          products,
          loading: false,
        });
      });
  }
  getCartEachItemTotal = (EachitemTotal) => {
    console.log("Hello wait im in getcartEachItemTotal", EachitemTotal);
    return EachitemTotal;
  };
  handleIncreaseQuantity = (product) => {
    product.prod_qty =parseInt( product.prod_qty);
    //product.prod_qty += 1;
    console.log("Handle increase quantity", typeof(product.prod_qty));
    //Updating Qty in FIREBASE 
    const docRef=firebase.firestore().collection("products").doc(product.id);
    docRef.update({
      prod_qty:product.prod_qty+1
    }).then(()=>{
      console.log("successfully incresed quantity")
    })
    //const index=this.state.ItemData.indexOf(product);
    // this.setState({
    //   product,
    // });
    //it will handle based on user clicble like increase quanty and decrease qty
    var EachItemPrice = this.handlePriceIncreDecreOnCartItem("+", product);
    this.prod_updated_price = EachItemPrice;
  };
  handleDecreaseQuantity = (product) => {
    console.log("Handle decreases quantity", product);
    
    const docRef=firebase.firestore().collection("products").doc(product.id)
    docRef.update({
      prod_qty:product.prod_qty > 1 ?product.prod_qty - 1 :product.prod_qty
     
    }).then(()=>{
      console.log("Succussfully Decresed Quantity");
    }).catch((error)=>{
      console.log(error)
    })
    //it will handle based on user clicble like increase quanty and decrease qty
    var EachItemPrice = this.handlePriceIncreDecreOnCartItem("-", product);
    this.prod_updated_price = EachItemPrice;
  };

  handleDeleteButton = (product) => {
    console.log("cart items button", product.id);
    // const CartProducts = this.state.products;
    // const RemainingProducts = CartProducts.filter((CartProduct) => {
    //   return CartProduct.id != product.id;
    // });
    // this.setState({
    //   products: RemainingProducts,
    // });

    //Delete in FireBase
    const docRef=firebase.firestore().collection("products").doc(product.id);
    docRef.delete().then(()=>{
      console.log("Deleted SuccessFully",product.prod_name)
    }).catch((error)=>{
      console.log(error)
    })
  };
  getCount = () => {
    var count = 0;
    const products = this.state.products;
    products.forEach((product) => {
      product.prod_qty =parseInt( product.prod_qty);
      count += product.prod_qty;
    });
    return count;
  };
  getTotal = () => {
    var total = 0;
    const products = this.state.products;
    products.forEach((product) => {
      total += product.prod_price * product.prod_qty;
    });
    return total;
  };
  handlePriceIncreDecreOnCartItem = (sign, product) => {
    var ExpectedProdAmount = product.prod_price;
    if (sign === "+") {
      console.log("hay iam increasing", product);
      ExpectedProdAmount = product.prod_price * product.prod_qty;
    } else if (sign === "-") {
      console.log("decrease qty", product);
      console.log("hay iam decresing", product);
      ExpectedProdAmount = product.prod_price * product.prod_qty;
    }

    return ExpectedProdAmount;
  };
  GetUpdatedPriceForEachItem = () => {
    console.log("updated price", this.prod_updated_price);
    if (this.prod_updated_price == 0) {
      return this.state.prod_qty * this.state.prod_price;
    } else {
      return this.prod_updated_price;
    }
  };
  addPorduct=()=>{
    firebase.firestore().collection("products").add(
      {
        prod_img:"",
        prod_name:"washing soap",
        prod_price:50.00,
        prod_qty:5
      }
    ).then((docsRef)=>{
         console.log("Product Added",docsRef)
    }).catch((error)=>{
      console.log(error)
    })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        {loading && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png"
            alt="loadingimg"
            className="loading"
          ></img>
        )}
        
        <button onClick={this.addPorduct}  style={{padding:20, top:6+"rem" ,position: "relative",margin:2+"em"  }}>Add Product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteButton={this.handleDeleteButton}
          onUpdatedPrice={this.GetUpdatedPriceForEachItem()}
        /><br/>
        
        <div className="cartTotal"> Total Price:{this.getTotal()}</div>
      </div>
    );
  }
}

export default App;

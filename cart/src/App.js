import "./index.css";
import CartItem from "./Components/CartItem";
function App() {
  const cartData=[
    {
      prod_name:"Shampoo",
      prod_price:20.22,
      prod_qty:2
    },
    {
      prod_name:"Soap",
      prod_price:30,
      prod_qty:3
    },
    {
      prod_name:"washing soap",
      prod_price:10.5,
      prod_qty:1
    },
    {
      prod_name:"Shurp",
      prod_price:40.9,
      prod_qty:5
    }

  ];
  return (
    <div className="App">
      <h1>Cart Page</h1>
      <CartItem name={cartData[0].prod_name} price={cartData[0].prod_price} qty={cartData[0].prod_qty}/>
      <CartItem name={cartData[1].prod_name} price={cartData[1].prod_price} qty={cartData[1].prod_qty}/>
      <CartItem name={cartData[2].prod_name} price={cartData[2].prod_price} qty={cartData[2].prod_qty}/>
      
    </div>
  );
}

export default App;

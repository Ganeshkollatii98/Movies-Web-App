import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './Components/App';
// importing redcers
import movies from "./Reducers"


//creating store
const store=createStore(movies);
// console.log("STORE",store)
// console.log("BEFORE STATE",store.getState())
// store.dispatch({type:"ADD_MOVIES",
//              movies:[{name:"spider man"}]
//             });
// console.log("AFTER STATE",store.getState())            
ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
// importing redcers
import movies from "./Reducers"
import { createStore } from 'redux';

//creating store
const store=createStore(movies);
console.log("STORE",store)
console.log("STATE",store.getState())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



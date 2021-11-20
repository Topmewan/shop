import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {Provider} from "react-redux";
import store from "./toolkit/store/store";
import {productsFetch} from "./toolkit/reducers/productSlice";

store.dispatch(productsFetch());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('root')
);



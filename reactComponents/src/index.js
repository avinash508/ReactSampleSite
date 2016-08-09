import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import SigninLogin from './components/signin';
import { Products, ProductList, ProductItem} from './components/products';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SigninLogin}/>
      <Route path="products" component={Products}>
        <IndexRoute component={ProductList} />
        <Route path=":id" component={ProductItem} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);

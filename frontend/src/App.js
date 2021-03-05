import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a href="index.html" className="brand">🛫 amazona</a>
          </div>
          <div>
            <a href="cart.html">购物车</a>
            <a href="signin.html">登录</a>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Redirect to="/" />
          </Switch>
        </main>
        <footer className="row center">
          All right reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;

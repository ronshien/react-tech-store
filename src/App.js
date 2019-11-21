import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/DefaultPage";
import Home from "./pages/HomePage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, ...*/}
        <Navbar />
        <Sidebar />
        <SideCart />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/products/:id" component={SingleProduct}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;

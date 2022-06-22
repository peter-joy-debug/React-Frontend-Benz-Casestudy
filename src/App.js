// import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cards from "./pages/Card";
import Team from "./pages/Team";
import Abouts from "./pages/About";
import Product from "./pages/Product";
import Contacts from './pages/Contact';
import Signups from './pages/Signup';
import DetailProduct from "./pages/Detail_Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (

    <Router>
      <Navbar/>
      <Switch>     
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/Cards" >
          <Cards />
        </Route>
        <Route exact path="/Login" >
          <Login />
        </Route>
        <Route exact path="/Product" >
          <Product />
        </Route>
        <Route exact path="/Team" >
          <Team />
        </Route>
        <Route exact path="/About" >
          <Abouts />
        </Route>
        <Route exact path="/Contact" >
          <Contacts />
        </Route>
        <Route exact path="/Signup" >
          <Signups />
        </Route>
        <Route path="/detailproduct/:id" component={DetailProduct} />
      </Switch>
      <Footer/>
    </Router>


    
  );
}

export default App;

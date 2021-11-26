import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "../src/components/Login/Login.js";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import WishListContainer from "./components/WishListContainer/WishListContainer";
import BasketContainer from "./components/BasketContainer/BasktetConainer"


class App extends  React.Component {
  constructor(props) {
    super(props);
      this.state = {
    };
  }
  render(){  
    return (
      <Router>
        <Header/> 
        
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route exact path="/home" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/wish-list" element={<WishListContainer/>}/>
          <Route path="/basket" element={<BasketContainer/>}/>
        </Routes>
        
        <Footer/>
           
      </Router>  
    );
  }
}

export default App;

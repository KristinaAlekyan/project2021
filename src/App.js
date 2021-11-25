import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "../src/components/Login/Login.js";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import WishListContainer from "./components/WishListContainer/WishListContainer";


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
        </Routes>
        
        <Footer/>
           
      </Router>  
    );
  }
}

export default App;

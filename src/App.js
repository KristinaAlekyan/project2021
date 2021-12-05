import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Login from "../src/components/Login/Login.js";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import WishListContainer from "./components/WishListContainer/WishListContainer";
import BasketContainer from "./components/BasketContainer/BasketContainer";
import {connect} from "react-redux";
import Register from "./components/Register/Register";
import Branches from "../src/components/Branches/branches.js";
import AboutUs from "./components/AboutUs/aboutUs.js";
import FAQ from "../src/components/FAQ/faq.js";
import ContactUs from "../src/components/ContactUs/contact.js";
import Household from "./components/Househould/Househould";



class App extends  React.Component {
  constructor(props) {
    super(props);
      this.state = {
        searchString: "" 
    };
    this.onSearchStringChange = this.onSearchStringChange.bind(this);

  }

  onSearchStringChange(event){
    this.setState({searchString: event.target.value});
  }

  render(){  
    return (
      
      <Router>
        <Header onChange={this.onSearchStringChange} value={this.state.searchString}/> 
        
        <Routes>
          <Route path="/" element={<Main searchString={this.state.searchString}/>}/>
          <Route exact path="/home" element={<Main searchString={this.state.searchString}/>}/>
          <Route path="/branches" element={<Branches/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/wish-list" element={<WishListContainer/>}/>
          <Route path="/basket" element={<BasketContainer/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/category/household" element={<Household/>}/>
        </Routes>
        
        <Footer/>
           
      </Router>  
    );
  }
}

export default connect()(App);

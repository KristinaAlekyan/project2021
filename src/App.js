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

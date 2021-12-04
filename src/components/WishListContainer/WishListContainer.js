import React from "react";
import WishListItem from "../WishListItem/WishListItem";
import Data from "../../Data/wishList.json";
import '../WishListContainer/wishListContainer.css';
import {wishListRemove} from "../../redux/action.js";
import {connect} from 'react-redux';

class WishListContainer extends React.Component {
  constructor(prop){
    super(prop)
    this.state = {
      data : JSON.parse(JSON.stringify(Data)),
    }
  }
  
  wishListProductRemove = (index) => {
    let { data } = this.state;
    const deletedIndex = data.findIndex(i => i.id === index);
    this.setState({data :[
                       ...data.slice(0, deletedIndex),
                       ...data.slice(deletedIndex+1)
                        ]});
  } 

  render() {
    return (
      <>
        <div className="wishList">
          <div className="wishListTitle">
              <h1>Wish List </h1>
          </div>
          <div className="wishListContainer">
            {
              this.state.data.length?
              (
                this.state.data.map(product => 
                  <WishListItem 
                      key = {product.id}
                      id = {product.id}
                      product_name = {product.product_name} 
                      product_price = {product.product_price}
                      wishListProductRemove = {this.wishListProductRemove}
                      image = {product.image}
                  />
              )):(<h3>Wish list is empty </h3>)
            }
            
          </div>
          
        </div>
      </>
    );
  }
  }

  const mapStateToProps = (state) => {
    return {
      wishListProduct: state.wishListProduct,
    };
  };
    
  const mapDispatchToProps = {
    wishListRemove
  };
   
  export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer);
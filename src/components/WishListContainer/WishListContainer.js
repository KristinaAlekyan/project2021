import React from "react";
import WishListItem from "../WishListItem/WishListItem";
import '../WishListContainer/wishListContainer.css';
import {wishListProductRemove} from "../../redux/actions/wishListAction";
import {connect} from 'react-redux';

class WishListContainer extends React.Component {
  constructor(prop){
    super(prop)
  }
  
  wishListProductRemove = (id) => {
    this.props.wishListProductRemove(id);

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
              this.props.wishListProduct.length?
              (
                this.props.wishListProduct.map(product => 
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
    wishListProductRemove
  };
   
  export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer);
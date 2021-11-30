import React from "react";
import WishListItem from "../WishListItem/WishListItem";
import Data from "./wishList.json";
import '../WishListContainer/wishListContainer.css';

class WishListContainer extends React.Component {
  constructor(prop){
    super(prop)
    this.state = {
      data : JSON.parse(JSON.stringify(Data)),
    }
  }
  deleteProduct = (index) => {
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
                      deleteProduct = {this.deleteProduct}
                  />
              )):(<h3>Wish list is empty </h3>)
            }
            
          </div>
          
        </div>
      </>
    );
  }
  }
  export default WishListContainer;
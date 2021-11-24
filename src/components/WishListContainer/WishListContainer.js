import React from "react";
import WishListItem from "../WishListItem/WishListItem";
import Data from "./wishList.json";

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
        <div className="d-flex justify-content-start mb-5">
          {this.state.data.map(product => 
              <WishListItem 
                  key = {product.id}
                  id = {product.id}
                  product_name = {product.product_name} 
                  product_price = {product.product_price}
                  deleteProduct = {this.deleteProduct}
              />
            )
          }
        </div>
      </>
    );
  }
  }
  export default WishListContainer;
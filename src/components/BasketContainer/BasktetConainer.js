import React from 'react';
import BasketItem from '../BasketItem/basketItem';
import Data from "../ProductContainer/product.json";

class BasketContainer extends React.Component {
    constructor(prop){
		super(prop)
		this.state = {
		  data : JSON.parse(JSON.stringify(Data)),
		}
	  }
	  addProduct = (index) => {
	  } 
	
	  render() {
		return (
		  <>
			<div className="d-flex flex-column justify-content-start mb-5">
                <h1>Basket </h1>
			  {this.state.data.map(product => 
				  <BasketItem 
					  key = {product.id}
					  id = {product.id}
					  product_name = {product.product_name} 
					  product_price = {product.product_price}
					  addProduct = {this.addProduct}
				  />
				)
			  }
			</div>

			<div className = "order">
				<p>Total  </p> 
				<p>__________ dr</p> 
				<button>Order</button>
			</div>
			
			
		  </>
		);
	  }
}
 
export default BasketContainer;
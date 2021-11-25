import React from 'react';
import Product from '../Product/Product';
import Data from "./product.json";

class ProductContainer extends React.Component {
    constructor(prop){
		super(prop)
		this.state = {
		  data : JSON.parse(JSON.stringify(Data)),
		}
	  }
	  addProduct = (index) => {
		  /*
		let { data } = this.state;
		const deletedIndex = data.findIndex(i => i.id === index);
		this.setState({data :[
						   ...data.slice(0, deletedIndex),
						   ...data.slice(deletedIndex+1)
							]});
		*/
	  } 
	
	  render() {
		return (
		  <>
			<div className="d-flex justify-content-start mb-5">
			  {this.state.data.map(product => 
				  <Product 
					  key = {product.id}
					  id = {product.id}
					  product_name = {product.product_name} 
					  product_price = {product.product_price}
					  addProduct = {this.addProduct}
				  />
				)
			  }
			</div>
		  </>
		);
	  }
}
 
export default ProductContainer;
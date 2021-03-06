import React from 'react';
import Product from '../Product/Product';
import Data from "./grocery.json";

class ProductContainer extends React.Component {
    constructor(props){
		super(props)
		this.state = {
		  data : JSON.parse(JSON.stringify(Data)),
		  searchString: props.searchString || ''
		}
	  }
	  addProduct = (index) => {
	  } 
	
	  render() {
		let filteredData = this.state.data
		if (this.props.searchString) {
			filteredData = filteredData.filter(element => element.product_name.toLowerCase().includes(this.props.searchString.toLowerCase()))
		}


		return (
		  <>
		  
			<div className="d-flex justify-content-start mb-5">
			  {filteredData.length > 0 ? filteredData.map(product => 
				  <Product 
					  key = {product.id}
					  id = {product.id}
					  product_name = {product.product_name} 
					  product_price = {product.product_price}
					  addProduct = {this.addProduct}
					  image = {product.image}
				  />
				) : <span>No Results!</span>
			  } 
			</div>
		  </>
		);
	  }
}
 
export default ProductContainer;
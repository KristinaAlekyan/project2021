import React from 'react';
import Product from '../Product/Product';
import "./household.css";

export const houseHoldData = 
[
    {
        "id":6,
        "product_name":"fork",
        "product_price":"600",
        "category": "Household",
        "image": "/images/6.jpeg"
    },
    {
        "id":7,
        "product_name":"pan",
        "product_price":"1700",
        "category": "Household",
        "image": "/images/7.jpeg"
    },
    {
        "id":8,
        "product_name":"spoon",
        "product_price":"500",
        "category": "Household",
        "image": "/images/8.jpeg"
    },
]




class Household extends React.Component {

    render() { 
        return (
			<div>
                {console.log("AAAAAAAAAAAAAAAAAAAAA")}
                <h1>HOULSEHOLD STUFF</h1>
                <div class="household">
                {houseHoldData.map(product => 
				  <Product 
					  key = {product.id}
					  id = {product.id}
					  product_name = {product.product_name} 
					  product_price = {product.product_price}
					  addProduct = {this.addProduct}
					  image = {product.image}
				  />
				)}
                </div>

			</div>
        )
    }
}
 
export default Household;
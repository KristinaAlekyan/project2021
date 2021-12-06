import React from 'react';
import Product from '../Product/Product';
import '../Beverages/Beverages.css';

export const BeveragesData = 
[
    {
        "id":15,
        "product_name":"Coca-Cola",
        "product_price":"9000",
        "category": "Beverages",
        "image": "/images/15.png"
    },
    {
        "id":16,
        "product_name":"Orange juice",
        "product_price":"300",
        "category": "Beverages",
        "image": "/images/16.jpeg"
    },
    {
        "id":18,
        "product_name":"Peach juice",
        "product_price":"400",
        "category": "Beverages",
        "image": "/images/1.png"
    },
];




class Beverages extends React.Component {

    render() { 
        return (
			<div className = "beveragesContainer">
                <h1>Beverages</h1>
                <div className="beverages">
                {BeveragesData.map(product => 
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
 
export default Beverages;
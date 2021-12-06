import React from 'react';
import Product from '../Product/Product';
import '../Groceries/Groceries.css';

export const GroceriesData = 
[
    {
        "id":19,
        "product_name":"Bread",
        "product_price":"150",
        "category": "Groceries",
        "image": "/images/2.jpg"
    },
    {
        "id":20,
        "product_name":"Peach",
        "product_price":"500",
        "category": "Groceries",
        "image": "/images/3.jpg"
    },
    {
        "id":21,
        "product_name":"Chicken",
        "product_price":"2000",
        "category": "Groceries",
        "image": "/images/4.jpeg"
    },
];




class Groceries extends React.Component {

    render() { 
        return (
			<div className = "groceriesContainer">
                <h1>Groceries</h1>
                <div className="groceries">
                {GroceriesData.map(product => 
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
 
export default Groceries;
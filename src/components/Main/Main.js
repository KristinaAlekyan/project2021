import React from 'react';
import '../Main/main.css';
import ProductContainer from '../ProductContainer/ProductContainer';
import WishListContainer from '../WishListContainer/WishListContainer'


class Main extends React.Component {
    render() { 
        return (
			<>
				<div class = "suparmarketPhoto">
				</div>
				<ProductContainer/>
				<WishListContainer/>
			</>
        )
    }
}
 
export default Main;
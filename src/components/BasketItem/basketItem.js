import React from 'react';
import '../BasketItem/basketItem.css';
import p1 from '../../images/1.png';


class BasketItem extends React.Component {
    
    render() { 
          
          
        const {id, product_name,product_price, addProduct} = this.props;
        return (          
            <div className="cardBasket" >
					<div className ="heartBasket" >
						<a >
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-heart" viewBox="0 0 16 16">
								<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
					  		</svg>
						</a>
					</div>
					<div className ="cardBasketImage">
						<img src = {p1} alt = "AAA"/>
					</div>
					<div className ="cardBasketProp">
                        <div className = "cardBasketName"> 
                            <p>{product_name}</p>
                        </div>
                        <div className = "cardBasketPrice">
                            <p className="priceBasket">{product_price} dr</p>
                        </div>
                        <div class="input-group">
                            <input type="button" value="-" class="button-minus" data-field="quantity"/>
                            <input type="number" step="1" max="" value="1" name="quantity" class="quantity-field"/>
                            <input type="button" value="+" class="button-plus" data-field="quantity"/>
                        </div>

                        <div className = "cardBasketPrice">
                            <p className="price">{product_price} dr</p>
                        </div>
                        <div className = "cardBasketButton">
                            <p><button onClick = {() => addProduct(id)}>X</button></p>
                        </div>
                    </div>
			</div>
        )
    }
} 
export default BasketItem;
import React from 'react';
import '../BasketItem/basketItem.css';


class BasketItem extends React.Component {
    
    render() { 
          
          
        const {id, product_name,product_price, basketProductRemove, image} = this.props;
        return (          
            <div className="cardBasket" >
					<div className ="cardBasketImage">
						<img src = {image} alt = "AAA"/>
					</div>
					<div className ="cardBasketProp">
                        <div className = "cardBasketName"> 
                            <p>{product_name}</p>
                        </div>
                        <div className = "cardBasketPrice">
                            <p className="priceBasket">{product_price} dr</p>
                        </div>
                        <div className="input-group ml-3">
                            <input type="button" value="-" class="button-minus" data-field="quantity"/>
                            <input type="number" step="1" max="" value="1" name="quantity" class="quantity-field"/>
                            <input type="button" value="+" class="button-plus" data-field="quantity"/>
                        </div>

                        <div className = "cardBasketPrice">
                            <p className="price">{product_price} dr</p>
                        </div>
                        <div className = "cardBasketButton">
                            <p><button onClick = {() => basketProductRemove(id)}>X</button></p>
                        </div>
                    </div>
			</div>
        )
    }
} 
export default BasketItem;
import React from 'react';
import BasketItem from '../BasketItem/basketItem';
import {basketProductRemove} from "../../redux/actions/basketAction.js";
import {connect} from 'react-redux';
import '../BasketContainer/basketContainer.css';
import {getBasketItems} from "../../redux/selectors";

class BasketContainer extends React.Component {
    constructor(prop) {
        super(prop)
        this.state = {}
    }

    basketProductRemove = (id) => {
        this.props.basketProductRemove(id);
        console.log(id)
    }

    render() {
        return (
            <div className="d-flex flex-column justify-content-center mb-5">
                <div className="basketTitle">
                    <h1>Basket </h1>
                </div>
                {
                    this.props.basketProduct.length ?
                        (
                            <>
                                <div className="basketContainer">
                                    {this.props.basketProduct.map(product =>
                                        <BasketItem
                                            key={product.id}
                                            id={product.id}
                                            product_name={product.product_name}
                                            product_price={product.product_price}
                                            basketProductRemove={this.basketProductRemove}
                                            image={product.image}
                                        />
                                    )}
                                </div>
                                <div className="order">
                                    <div className="orderTotal">
                                        <h4>Total </h4>
                                    </div>
                                    <div className="orderCount">
                                        <h4>
                                            {this.props.basketProduct
                                                .map(function (item) {
                                                    return item["product_price"]
                                                })
                                                .reduce(function (y, x) {
                                                    return y + +x;
                                                }, 0)}
                                            dr
                                        </h4>
                                    </div>
                                    <div className="orderButton">
                                        <button>Order</button>
                                    </div>
                                </div>
                            </>
                        )
                        : (<h3>Basket is empty</h3>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        basketProduct: getBasketItems(state),
    };
};

const mapDispatchToProps = {
    basketProductRemove
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);
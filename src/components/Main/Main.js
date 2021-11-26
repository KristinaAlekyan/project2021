import React from 'react';
import './main.css';
import ProductContainer from '../ProductContainer/ProductContainer';


class Main extends React.Component {

	constructor(props) {
		super(props);
	}

    render() { 
        return (
			<>
				<div class = "suparmarketPhoto">
				</div>
				<ProductContainer searchString={this.props.searchString}/>
			</>
        )
    }
}
 
export default Main;
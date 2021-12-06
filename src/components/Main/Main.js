import React from 'react';
import './main.css';
import ProductContainer from '../ProductContainer/ProductContainer';
import {LOGIN_STATES} from "../../constants";
import {getLoginState} from "../../redux/selectors";
import {connect} from "react-redux";
import Profile from '../Profile/Profile';


class Main extends React.Component {

    render() { 		
        let userLogin;
		if(this.props.loginState !== LOGIN_STATES.TRUE){
			userLogin = <div className = "suparmarketPhoto"></div>
		} else {
			userLogin = <Profile/>			
		}			

        return (
			<>	
				{userLogin}
				<ProductContainer searchString={this.props.searchString}/>
			</>
        )
    }
}
 
const mapStateToProps = state => {
    const loginState = getLoginState(state);
    return {loginState};
}

export default connect(mapStateToProps)(Main);
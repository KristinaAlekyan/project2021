import React from 'react';
import '../Header/header.css';
import armFlag from '../../images/armenia.png'
import { Link } from 'react-router-dom';
import {getLoginState} from "../../redux/selectors";
import {connect} from "react-redux";
import {LOGIN_STATES} from "../../constants";
import {FaUser} from "react-icons/all"

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let userLogin;
        if(this.props.loginState === LOGIN_STATES.TRUE)
            userLogin = <div className="dropdown">
                <button className="dropbtn"><FaUser/></button>
                <div className="dropdown-content">
                    <Link to="/user/history">History</Link>
                    <a href="/user/edit">Edit</a>
                    <a href="/user/profil">Profil</a>
                    <a href="/user/logout">Logout</a>
                </div>
            </div>

        return (
            <div className="d-flex flex-row justify-content-between ">
               <div>
                    <ul class="nav">
                        <li class="nav-item">                            
                            <a class="nav-link active " aria-current="page" href ="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/branches">Branches</a>
                        </li>

                        {/* <li class="nav-item">
                            <a class="nav-link" href="/category">Category</a>
                        </li> */}

                        <li class="nav-item">
                            <div class="dropdown">
                                <button class="dropbtn" >Category</button>
                                <div class="dropdown-content">
                                    <Link to="/category/household">Household</Link>
                                    <a href="/category/personalcare">Personal Care</a>
                                    <a href="/category/beverages">Beverages</a>
                                    <a href="/category/groceries">Groceries</a>
                             </div>
</div> 
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/about"> About </a>
                        </li>
                        <li>
                            <input className = "search"
                                type="text"
                                onChange={this.props.onChange}
                                placeholder="Search..."
                                value={this.props.value}
                            />
                        </li>
                    </ul>
               </div>
               <div>
                    <ul class="nav">
                        <li class="nav-item ">
                            <a>
                                <div class = "flag">
                                    <img  alt ="" src={armFlag}/>
                                </div>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="wish-list">
                                <svg  width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/basket">
                            <svg  width="17" height="17" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
								<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
							  </svg>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login"> Login </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/register"> Register </a>
                        </li>
                        <li>
                            {userLogin}
                        </li>
                    </ul>
               </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const loginState = getLoginState(state);
    return {loginState};
}

export default connect(mapStateToProps)(Header);
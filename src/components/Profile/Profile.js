import React from 'react';
import '../Profile/profile.css';


class Profile extends React.Component {
    render() { 
        return (          
            <div className="profileContainer">
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div claclassNamess="card h-100">
                        <div class="card-body">
                            <div class="account-settings">
                                <div class="user-profile">
                                    <div class="user-avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
                                    </div>
                                    <h5 class="user-name">User</h5>
                                    <h6 class="user-email">aaa@gmail.com</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 
export default Profile;
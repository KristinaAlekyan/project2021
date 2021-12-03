//import React, {useState} from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login/login.css";
import {connect} from "react-redux";
import {login} from "../../redux/actions/loginAction"
import {getLoginState} from "../../redux/selectors"

// const Login = ({login,loginState}) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//
//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }
//
//   function handleSubmit(event) {
//     event.preventDefault();
//   }
//
//   function loginHander(){
//     if(loginState === false)
//       alert("You are not on data base");
//     else if(loginState === true)
//       alert("You are in");
//   }
//
//
//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()} onClick={() => login({email, password})}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
    }

        validateForm = () => {
        return (this.state.email.length > 0 && this.state.password.length > 0)
    }

    updateEmail = email => {
        this.setState({email: email});
    }
    updatePassword = password => {
        this.setState({password: password});
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    loginHander = () => {
        if (this.props.loginState === false)
            alert("You are not on data base");
        else if (this.props.loginState === true)
            alert("You are in");
    }

    render() {
        let email = this.state.email;
        let password = this.state.password;
        return (
            <div className="Login">
                <Form onSubmit={
                    this.handleSubmit
                }>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => this.updateEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => this.updatePassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!this.validateForm()}
                            onClick={() => login({email, password})}>
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const loginState = getLoginState(state);
    return {loginState};
}

export default connect(mapStateToProps, {login})(Login);
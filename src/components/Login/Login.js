import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login/login.css";
import {connect} from "react-redux";
import {login} from "../../redux/actions/loginAction";
import {getLoginState} from "../../redux/selectors"
import {LOGIN_STATES} from "../../constants";

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
                            onClick = {() => this.props.login(email,password)}>
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
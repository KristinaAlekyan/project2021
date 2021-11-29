import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../Register/register.css";

export default function Register() {
    const [firstName, setFirstName] = useState("");    
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const [repeatPassword, setRepeatPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        /*
        if (password !== repeatPassword) {
            console.log("Passwords do not match");
          } else {
            const newUser = {
              firstName,
              lastName,
              email,
              password
            };
            try {
              const config = {
                headers: {
                  "Content-Type": "application/json",
                },
              };
              const body = JSON.stringify(newUser);
              const res = await axios.post("/api/users", body, config);
              console.log(res.data);
            } catch (err) {
              console.error(err.response.data);
            }
          }
        };
        */
    }

    return (
        <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="name">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    autoFocus
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" controlId="repeatPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control
                    type="password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
            </Form.Group>

            <Button onClick = {handleSubmit} block size="lg" type="submit" disabled={!validateForm()}>
            Register
            </Button>
        </Form>
        </div>
    );
}
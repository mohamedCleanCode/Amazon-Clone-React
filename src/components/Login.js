import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="login d-flex justify-content-center align-items-center flex-column"
      style={{ width: "500px", margin: "auto" }}
    >
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="Amazon Logo"
          style={{ width: "150px", height: "150px", objectFit: "contain" }}
        />
      </Link>
      <Form className="border p-4">
        <h1>Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button
          className="w-100 text-dark border-0"
          style={{ backgroundColor: "orange" }}
          type="submit"
        >
          Continue
        </Button>
        <p>new to amazon?</p>
        <Link to="/signup">create your amazon account</Link>
      </Form>
    </div>
  );
};

export default Login;

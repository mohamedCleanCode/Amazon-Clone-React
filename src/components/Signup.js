import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      className="signup d-flex justify-content-center align-items-center flex-column"
      style={{ width: "500px", margin: "auto" }}
    >
      <Form className="border p-4">
        <h1>Create an account</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfermPassword">
          <Form.Label>Conferm Password</Form.Label>
          <Form.Control type="password" placeholder="Conferm Password" />
        </Form.Group>
        <Button
          className="w-100 text-dark border-0 mb-2"
          style={{ backgroundColor: "orange" }}
          type="submit"
        >
          Submit
        </Button>
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </Form>
    </div>
  );
};

export default Signup;

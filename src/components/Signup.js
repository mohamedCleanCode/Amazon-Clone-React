import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../context/GlobalContext";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const { signup } = useData();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const emailRef = useRef();
  const PasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const handelRegister = async (e) => {
    e.preventDefault();
    if (
      PasswordRef.current.value.length < 6 ||
      PasswordRef.current.value !== confirmPasswordRef.current.value
    ) {
      return setError("Passwords don't matched or passwrod length < 6!");
    } else {
      try {
        setLoading(true);
        setError("");
        await signup(emailRef.current.value, PasswordRef.current.value);
        navigate("/");
      } catch (error) {
        setError("Failed to signup!");
      }
      setLoading(false);
    }
  };
  return (
    <div
      className="signup d-flex justify-content-center align-items-center flex-column"
      style={{ width: "500px", margin: "auto" }}
    >
      <Form onSubmit={handelRegister} className="border p-4">
        <h1>Create an account</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={PasswordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfermPassword">
          <Form.Label>Conferm Password</Form.Label>
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Conferm Password"
          />
        </Form.Group>
        <Button
          disabled={loading}
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

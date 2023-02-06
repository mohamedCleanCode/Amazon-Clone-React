import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../context/GlobalContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signin } = useData();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const emailRef = useRef();
  const PasswordRef = useRef();

  const handelSignin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await signin(emailRef.current.value, PasswordRef.current.value);
      navigate("/");
    } catch (error) {
      setError("Failed to login!");
    }
  };
  return (
    <div
      className="login d-flex justify-content-center align-items-center flex-column"
      style={{ width: "500px", margin: "auto" }}
    >
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="Amazon Logo"
          style={{ width: "150px", height: "110px", objectFit: "contain" }}
        />
      </Link>
      <Form
        onSubmit={handelSignin}
        className="border p-4"
        style={{ width: "355px" }}
      >
        <h1>Sign In</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-bold">Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-bold">Password</Form.Label>
          <Form.Control ref={PasswordRef} type="password" />
        </Form.Group>
        <Button
          disabled={loading}
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

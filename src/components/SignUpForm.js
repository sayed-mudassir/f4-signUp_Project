import React, { useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const validateEmail = (input) => {
    const condition = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setValidEmail(condition.test(input));
  };

  const validatePassword = (input) => {
    setValidPassword(input.length >= 8);
  };

  const validateConfirmPassword = (input) => {
    setValidConfirmPassword(input === password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validEmail && validPassword && validConfirmPassword) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <form className="form">
      <label htmlFor="email">Email:</label>
      <br />
      <input
        type="email"
        value={email}
        id="email"
        placeholder="Enter your email"
        style={{
          borderColor: email ? (validEmail ? "#4B8C08" : "#E2432E") : "gray",
        }}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
      />
      <br />
      {email && !validEmail && <p className="error">Invalid email format</p>}
      <label htmlFor="pswrd">Password:</label>
      <br />
      <input
        type="password"
        value={password}
        id="pswrd"
        placeholder="Enter your password"
        style={{
          borderColor: password
            ? validPassword
              ? "#4B8C08"
              : "#E2432E"
            : "gray",
        }}
        onChange={(e) => {
          setPassword(e.target.value);
          validatePassword(e.target.value);
        }}
      />{" "}
      <br />
      {password && !validPassword && (
        <p className="error">Password must be at least 8 characters</p>
      )}
      <label htmlFor="cnfrm-pswrd">Confirm Password:</label>
      <br />
      <input
        type="password"
        value={confirmPassword}
        id="cnfrm-pswrd"
        placeholder="Enter your password again"
        style={{
          borderColor: confirmPassword
            ? validConfirmPassword
              ? "#4B8C08"
              : "#E2432E"
            : "gray",
        }}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
          validateConfirmPassword(e.target.value);
        }}
      />
      <br />
      {confirmPassword && !validConfirmPassword && (
        <p className="error">Passwords do not match</p>
      )}
      <div className="button-wrapper">
        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;

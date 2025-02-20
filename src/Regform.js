import React, { useEffect, useState } from "react";

function RegForm(props) {
  const [name, setName] = useState(props.nameValue);
  const [email, setEmail] = useState(props.emailValue);
  const [password, setPassword] = useState(props.passwordValue);
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    setName(props.nameValue);
    setEmail(props.emailValue);
    setPassword(props.passwordValue);
  }, [props.nameValue, props.emailValue, props.passwordValue]);

  const arr = [name, email, password];

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleClick = () => {
    if (validateEmail(email)) {
      props.getState(arr);
      console.log(email);
    }
  };

  return (
    <div style={{ maxWidth: "40%", margin: "0px auto" }}>
      <input
        defaultValue={props.nameValue}
        onChange={(event) => setName(event.target.value)}
        className="form-control my-3"
        placeholder="Enter your name"
      />
      <input
        defaultValue={props.emailValue}
        onChange={(event) => {
          setEmail(event.target.value);
          setEmailError('');
        }}
        type="email"
        className="form-control my-3"
        placeholder="Enter your email"
      />
      {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      <input
        defaultValue={props.passwordValue}
        onChange={(event) => setPassword(event.target.value)}
        className="form-control my-3"
        placeholder="Enter Password"
      />
      <button
        onClick={handleClick}
        className="btn btn-success my-3 d-block mx-auto"
        type="submit"
      >
        {props.children}
      </button>
    </div>
  );
}

export default RegForm;

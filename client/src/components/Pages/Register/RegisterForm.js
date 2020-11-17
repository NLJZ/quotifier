import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { getUser, login } from "../../../redux/actions";
import { useDispatch } from "react-redux";

const axios = require("axios");

const RegisterForm = () => {
  const [userFirst, setFirst] = useState("");
  const [userLast, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(null);
  const dispatch = useDispatch();

  const options = {
    url: "/api/v1/users/register",
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      userFirst: string,
      userLast: string,
      email: email,
      password: password,
    },
  };

  const submitForm = async () => {
    await axios(options)
      .then((response) => {
        console.log(response);
        let user = response.data.user;
        dispatch(getUser(user));
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error.response);
        alert(
          `${error.response.data.errors.email} ${error.response.data.errors.password}`
        );
      });
    dispatch(login());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm();
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form className="reg-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        className="input"
        onChange={(e) => setFirst(e.target.value)}
        placeholder="firstName"
        autoComplete="on"
        required
      />
      <input
        type="text"
        name="lastName"
        className="input"
        onChange={(e) => setLast(e.target.value)}
        placeholder="lastName"
        autoComplete="on"
        required
      />
      <input
        type="email"
        name="email"
        className="input"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        autoComplete="on"
        required
      />
      <input
        type="password"
        name="password"
        className="input"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        autoComplete="on"
        required
      />
      <button className="register-button" type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;

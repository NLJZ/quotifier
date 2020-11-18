import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  login,
  loadSources,
  getUser,
  loadQuotes,
  loadFaves,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getSources, getQuotes } from "../../../helpers/getUserData";
import LoadingAnimation from "../../Animation/LoadingAnimation";

const axios = require("axios");

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const options = {
    url: "/api/v1/users/login",
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email: email, password: password },
  };

  function handleLoading() {
    setLoading(!loading);
  }

  const getData = async () => {
    const sources = await getSources();
    const quotes = await getQuotes();
    await dispatch(loadQuotes(quotes));
    await dispatch(loadSources(sources));
    await dispatch(loadFaves(quotes));
  };

  const submitForm = async () => {
    await axios(options)
      .then((response) => {
        handleLoading();
        let user = response.data.user;
        dispatch(getUser(user));
        dispatch(login());
        getData();
        setRedirect(true);
      })
      .catch((error) => {
        console.log(error.response);
        alert(
          `${error.response.data.errors.email} ${error.response.data.errors.password}`
        );
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitForm();
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
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
      <button className="sign-in-button" type="submit" value="Submit">
        Submit
      </button>

      {loading ? <LoadingAnimation /> : null}
    </form>
  );
};

export default LoginForm;

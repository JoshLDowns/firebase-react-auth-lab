import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import firebaseApp from "../auth/base.js";
import { AuthContext } from "../auth/Auth.js";

const Login = ({ history }) => {
  
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value)
        history.push("/")
      } catch (error) {
        alert(error);
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log In</button>
      </form>
      <h3>Not a member?</h3>
      <Link to="/signup">Sign Up!</Link>
    </div>
  )
}

export default withRouter(Login);
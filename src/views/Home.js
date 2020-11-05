import React from "react";
import firebaseApp from "../auth/base.js";

const Home = () => {

  const handleLogout = () => {
    firebaseApp.auth().signOut();
  }

  return (
    <div>
      <h1>Home!</h1>
      <button onClick={handleLogout}>Sign Out</button>
    </div>
  )
}

export default Home;
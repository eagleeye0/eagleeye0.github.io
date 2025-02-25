import React from "react";
import Navbar from "../components/navbar";

export default function Shop() {


  return <>
    <Navbar />
    <h1>Influencer Login/SignUp</h1>
    <form>
      <p>Email</p>
      <input type="email"></input>
      <br />
      
      <p>password</p>
      <input type="password"></input>
      <br />
      <button>Submit</button>
    </form>
  </>
}


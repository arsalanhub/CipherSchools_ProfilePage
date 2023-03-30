import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Description = () => {
  return(
  <div className="description">
        <div style={{ borderBottom: "1px solid" }}>Description</div>
        <div>1. This is simple profile page / dashboard for user.</div>
        <div>2. If you are new then singup or use this credential to explore platform. <span style={{ fontWeight: "700" }}>(arsalanmohd237@gmail.com, 123456789)</span></div>
  </div>
  )
}
export default function LoginSignUpPage() {
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    let data = localStorage.getItem("userData");
    if(data) navigate("/profile");
  }, [])

  const loginHandler = async () => {
    let { data } = await axios.post("http://localhost:5000/login", {
      email,
      password,
    });
    localStorage.setItem("userData", JSON.stringify(data.data));
    navigate("/profile");
  };
  const signUpHandler = async () => {
    let { data } = await axios.post("http://localhost:5000/signup", {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      phone,
    });
    localStorage.setItem("userData", JSON.stringify(data.data));
    navigate("/profile");
  };
  if (isLoginPage) {
    return (
      <>
      <div className="loginSignupWrapper">
        <div>Login Page</div>
        <input
          type="email"
          placeholder="Enter you Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => loginHandler()}>Login</button>
        <a href="#" onClick={() => setIsLoginPage(false)}>
          Signup
        </a>
      </div>
      <Description />
      </>
    );
  } else {
    return (
      <>
      <div className="loginSignupWrapper"> 
        <div>Signup Page</div>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone (Optional)"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => signUpHandler()}>Create Account</button>
        <a href="#" onClick={() => setIsLoginPage(true)}>
          Login
        </a>
      </div>
      <Description />
      </>
    );
  }
}

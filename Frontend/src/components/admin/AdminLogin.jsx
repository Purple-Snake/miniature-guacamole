import { useState } from "react";
import axios from "axios";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
      };

      await axios.post("#", registerData).then((response) => {
        if (response.status === 200) {
          return (window.location.href = "http://localhost:5173/");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>
        <b>Log in</b>
      </h1>
      <form onSubmit={login}>
        <label htmlFor="emailInput">Email</label>
        <br />
        <input
          type="email"
          id="emailInput"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={email}
          required
        />
        <br />
        <label htmlFor="passwordInput">Password</label>
        <br />
        <input
          type="password"
          id="passwordInput"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
          defaultValue={password}
          required
        />
        <br />
        <button type="submit">logIn</button>
      </form>
    </>
  );
}

export default AdminLogin;

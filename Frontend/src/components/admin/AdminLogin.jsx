import { useState } from "react";
import axios from "axios";

function AdminLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function login(e) {
    e.preventDefault();

    try {
      const registerData = {
        userName,
        password,
      };

      await axios.post("http://localhost:3000/users/login", registerData).then((response) => {
        if (response.status === 200) {
          return (window.location.href = "http://localhost:5173/adminNav");
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
        <label htmlFor="emailInput">User name</label>
        <br />
        <input
          type="text"
          id="userNameInput"
          className="loginInput"
          onChange={(e) => setUserName(e.target.value)}
          defaultValue={userName}
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

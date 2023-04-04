import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeRequest } from "../../utils/makeRequest";
import "./Login.scss";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    try {
      const resp = await makeRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(resp.data.user));
      if (resp.data.ok) {
        navigate("/");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err?.response) {
          setError(err.response.data.message);
        }
      }
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {!!error && <div className="error-field">{error}</div>}
      </form>
    </div>
  );
};
export default Login;

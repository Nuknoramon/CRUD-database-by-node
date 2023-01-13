import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useAuth();

  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8007/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      ctx.setIsLogged(true);
      navigate("/");
    } catch (err) {
      alert("Something wrong");
      console.log(err);
    }
  };

  return (
    <div
      className="mx-auto p-4 border-1 bg-white mt-5 rounded-3 shadow"
      style={{ maxWidth: 600 }}
    >
      <form onSubmit={handleSubmitForm}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.email === email && user?.password === password) {
      const expiry = Date.now() + 5 * 60 * 1000;
      localStorage.setItem("session", expiry);
      dispatch(login(user));
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-colors">
        <div className="bg-white dark:bg-gray-900 p-6 rounded shadow w-80 transition-colors">
          <h2 className="text-xl mb-4 text-gray-800 dark:text-gray-100">Login</h2>
          {error && <p className="text-red-500">{error}</p>}

          {/* Email input */}
          <input
            className="border p-2 w-full mb-2 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          {/* Password input */}
          <input
            type="password"
            className="border p-2 w-full mb-4 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="bg-blue-500 hover:bg-blue-600 text-white w-full p-2 rounded transition-colors" onClick={submit}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
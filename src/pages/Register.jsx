import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; //  import Navbar

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(""); // store validation errors
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const submit = () => {
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Please enter a valid email");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    navigate("/login");
  };

  return (
    <>
      <Navbar /> {/* Dark mode toggle will now work */}
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-colors">
        <div className="bg-white dark:bg-gray-700 p-6 rounded shadow w-80">
          <h2 className="text-xl mb-4 text-gray-900 dark:text-white">Register</h2>

          {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}

          <input
            className="border p-2 w-full mb-2 rounded bg-gray-50 dark:bg-gray-600 text-gray-800 dark:text-white"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="border p-2 w-full mb-2 rounded bg-gray-50 dark:bg-gray-600 text-gray-800 dark:text-white"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            className="border p-2 w-full mb-4 rounded bg-gray-50 dark:bg-gray-600 text-gray-800 dark:text-white"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button
            onClick={submit}
            className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
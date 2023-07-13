import React, { useState } from "react";
import { useRouter } from "next/router";

require("dotenv").config();

const AdminLogin = ({ authenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === process.env.ADMIN && password === process.env.PASSWORD) {
      localStorage.setItem("isAdminLoggedIn", true);
      console.log(username, process.env.ADMIN);
      console.log(password, process.env.PASSWORD);
      router.push("/applicants");
    } else {
      console.log(username, process.env.ADMIN);
      console.log(password, process.env.PASSWORD);
      setErrorMessage("Invalid username or password");
    }
  };
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Admin Login</h1>
      <form className="w-64" onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="text-lg">Username:</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-lg">Password:</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-red-500 to-purple-500  text-white font-bold mb-2 py-2 px-4 rounded"
        >
          Login
        </button>
        {errorMessage && (
          <p className="font-bold text-red-500	">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AdminLogin;

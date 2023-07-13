import React, { useState } from "react";
import { useRouter } from "next/router";
import "../src/app/globals.css";
require("dotenv").config();

const MyApp = ({ Component, pageProps }) => {
  const [authenticated, setAuthenticated] = useState(
    typeof window !== "undefined" &&
      localStorage.getItem("isAdminLoggedIn") === "true"
  );

  const router = useRouter();

  const handleLogin = (username, password) => {
    // Perform authentication logic here
    if (username === process.env.ADMIN && password === process.env.PASSWORD) {
      localStorage.setItem("isAdminLoggedIn", true);

      setAuthenticated(true);
      router.push("/applicants");
    } else {
      setAuthenticated(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setAuthenticated(false);
    router.push("/admin-login");
  };

  // Perform any additional app-wide setup or logic here

  return (
    <Component
      {...pageProps}
      authenticated={authenticated}
      setAuthenticated={setAuthenticated}
      onLogin={handleLogin}
      onLogout={handleLogout}
    />
  );
};

export default MyApp;

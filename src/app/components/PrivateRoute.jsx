import React from "react";
import { useRouter } from "next/router";

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  const router = useRouter();

  if (!authenticated) {
    // Redirect to login page if not authenticated
    router.push("/admin-login");
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;

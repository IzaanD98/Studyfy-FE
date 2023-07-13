import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Applicants = ({ authenticated }) => {
  const router = useRouter();
  console.log(authenticated);
  useEffect(() => {
    if (typeof window !== "undefined" && !authenticated) {
      // Redirect to login page if not authenticated
      router.push("/admin-login");
    }
  }, [authenticated, router]);

  if (typeof window !== "undefined" && !authenticated) {
    // Return null if not authenticated (to avoid rendering content before redirection)
    return null;
  }

  return (
    <div>
      <p>Table here</p>
    </div>
  );
};

export default Applicants;

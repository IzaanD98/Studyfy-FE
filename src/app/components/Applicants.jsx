import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { allApplicants } from "../utils/api";

const Applicants = ({ authenticated }) => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && !authenticated) {
      // Redirect to login page if not authenticated
      router.push("/admin-login");
    } else {
      fetchApplicants();
    }
  }, [authenticated, router]);

  const fetchApplicants = async () => {
    try {
      const response = await allApplicants();
      setApplicants(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching applicants:", error);
      setLoading(false);
    }
  };

  if (!authenticated) {
    return null;
  }

  return (
    <div>
      <div className="bg-gray-800">
        <div className="max-w-3xl mx-auto py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold py-6">Applicants</h1>
          <div className="m-5">
            {loading ? (
              <p>Loading...</p> // Render loading indicator if loading is true
            ) : (
              <table className="mx-auto text-left m-10 text-white">
                <thead>
                  <tr className="border">
                    <th className="px-4 py-2 border">Reference</th>
                    <th className="px-4 py-2 border">First Name</th>
                    <th className="px-4 py-2 border">Surname</th>
                    <th className="px-4 py-2 border">Email</th>
                    <th className="px-4 py-2 border">Phone Number</th>
                    <th className="px-4 py-2 border">Course</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((applicant, index) => (
                    <tr className="border" key={applicant.id}>
                      <td className="px-4 py-2 border">
                        {applicant.referenceNumber}
                      </td>
                      <td className="px-4 py-2 border">
                        {applicant.firstName}
                      </td>
                      <td className="px-4 py-2 border">{applicant.surname}</td>
                      <td className="px-4 py-2 border">{applicant.email}</td>
                      <td className="px-4 py-2 border">
                        {applicant.phoneNumber}
                      </td>
                      <td className="px-4 py-2 border">{applicant.course}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicants;

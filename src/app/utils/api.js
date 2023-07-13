import axios from "axios";

const applicantAPI = axios.create({
  baseURL: "https://studyfy-be.onrender.com/api",
});

export const allApplicants = () => {
  return applicantAPI.get(`/applicants`).then(({ data }) => {
    return data;
  });
};

export const postApplicant = (applicant) => {
  return applicantAPI.post(`/applicants`, applicant).then(({ data }) => {
    return data.newApplicant;
  });
};

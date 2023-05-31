import { useRouter } from "next/router";
import React from "react";
import Navbar from "@/app/components/Navigation";
import Head from "next/head";
import Footer from "@/app/components/Footer";
import IndividualCourseContent from "@/app/components/IndividualCourseContent";
import IndividualCourseHero from "@/app/components/IndividualCourseHero";

function CoursePage() {
  const router = useRouter();
  const { course } = router.query;

  const courses = {
    "ba-hons-business-management-with-foundation-year": {
      title: "BA (Hons) Business Management with Foundation Year",
      campus: "David Game College - London",
      type: "2  days per week (daytime or evenings & Saturday)",
      start: "2nd October 2023",
      ucas: "DGBY",
      duration: "4 years",
      level: "Undergraduate",
      body: "Buckinghamshire New University",
      intakes: "March & September",
      overview:
        "The BA (Hons) Business Management with Foundation Year programme is delivered in partnership with Buckinghamshire New University. The course is offered to those who do not meet the minimum requirements for our three-year programme, or those who do not feel fully prepared for first-year entry. This is a four-year programme that includes an initial Foundation Year. The Foundation Year will help you to hone your academic study skills and develop your abilities while also recognising your own strengths and areas for improvement in preparation for a bachelor’s degree. Today’s management of companies and organisations necessitates serious leadership abilities. Companies are still on the lookout for experienced and trained executives to ensure future success. Employers are looking for graduates who are not only academically trained but also work-ready with management and leadership skills. This course will give you the tools you need to be a positive and competent manager. The shift is the only constant for the new generation of executives. This curriculum will not only provide you with experience and understanding of current best practices in strategic international management, but it will also assist you in developing your personal skills in order to prepare you for your first management positions or for starting your own company. This course is delivered two days per week or two evenings plus Saturday. In addition, learners are required to attend a personal tutor meeting twice per semester.",
      module: [
        {
          year: "Foundation Year",
          level: "3",
          modules: [
            { title: "Introduction to Business Studies" },
            { title: "Preparing for Success Knowledge and Creativity" },
            {
              title:
                "Preparing for Success Self-development and Responsibility",
            },
            { title: "Inquiry Based Learning" },
          ],
        },
        {
          year: "Year 1",
          level: 4,
          modules: [
            { title: "Global Business Environment", credits: 15 },
            { title: "The Graduate Challenge", credits: 15 },
            { title: "Introduction to People Management", credits: 15 },
            { title: "Principles of Marketing", credits: 15 },
            { title: "Financial Decision-making", credits: 15 },
            { title: "Organisational Behaviour", credits: 15 },
            { title: "Career Viewpoint", credits: 15 },
            { title: "Data Insight for Business Decisions", credits: 15 },
          ],
        },
        {
          year: "Year 2",
          level: 5,
          modules: [
            { title: "Business Consulting", credits: 15 },
            { title: "Project Management", credits: 15 },
            { title: "Contemporary Business Economics", credits: 15 },
            { title: "Enterprise and Entrepreneurship", credits: 15 },
            { title: "Consultancy in Practice", credits: 15 },
            { title: "Operations and Service Management", credits: 15 },
            { title: "Digital Business and New Technologies", credits: 15 },
            { title: "Strategic Marketing", credits: 15 },
          ],
        },
        {
          year: "Year 3",
          level: 6,
          modules: [
            { title: "Research Methods", credits: 15 },
            { title: "Strategic Agility", credits: 15 },
            { title: "International Marketing Management", credits: 15 },
            { title: "Developing Leadership & Management Skills", credits: 15 },
            {
              title: "Managing and Developing Innovation & Creativity",
              credits: 15,
            },
            {
              title: "Change Management and Organisation Development",
              credits: 15,
            },
            { title: "Dissertation", credits: 30 },
          ],
        },
      ],
      total_credits: 120,
      entry: [
        "Applications are reviewed individually, considering unique circumstances",
        "Open to applicants with UK qualifications, work experience, or qualifications from overseas",
        "Four-year program available for those who do not meet minimum requirements or need more preparation",
        "Foundation Year applicants typically achieve between 32-56 UCAS tariff points",
        "Suitability for foundation program may vary, contact Admissions team for further discussion",
        "Encourage mature students (21 years and older) to apply, value diverse experiences and perspectives",
        "IELTS 5.5 / 4/C in English GCSE / Functional Skills Level 2",
        "Students from non-English-speaking countries may need to take an English Test offered by DGHE",
        "Pre-sessional English language course available for those who do not meet required standard",
        "BA (Hons) Business Management with Foundation year qualification requires learners to be 18 years and over at the start of the course",
      ],
    },
  };

  const courseDetails = courses[course];

  if (!courseDetails) {
    return (
      <div>
        <h1>Invalid Course</h1>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Studyfy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section>
          <Navbar />
          <IndividualCourseHero prop={courseDetails} />
          <IndividualCourseContent prop={courseDetails} />
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default CoursePage;

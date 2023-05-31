import { useRouter } from "next/router";
import React from "react";
import Navbar from "@/app/components/Navigation";
import Head from "next/head";
import Footer from "@/app/components/Footer";
import IndividualCourseContent from "@/app/components/IndividualCourseContent";
import IndividualCourseHero from "@/app/components/IndividualCourseHero";
import courses from "../../coursesObject";

function CoursePage() {
  const router = useRouter();
  const { course } = router.query;

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

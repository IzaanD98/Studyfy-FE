import React from "react";
import Navbar from "../src/app/components/Navigation";
import Head from "next/head";

import Footer from "../src/app/components/Footer";
import CoursesContent from "@/app/components/CoursesContent";
import CourseHero from "@/app/components/CourseHero";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Studyfy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section>
          <Navbar />
          <CourseHero />
          <CoursesContent />
          <Footer />
        </section>
      </main>
    </div>
  );
}

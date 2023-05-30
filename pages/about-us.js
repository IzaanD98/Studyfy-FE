import React from "react";
import Navbar from "../src/app/components/Navigation";
import Head from "next/head";

import Footer from "../src/app/components/Footer";
import AboutHero from "@/app/components/AboutHero";
import AboutContent from "@/app/components/AboutContent";
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
          <AboutHero />
          <AboutContent />
          <Footer />
        </section>
      </main>
    </div>
  );
}

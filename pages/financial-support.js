import React from "react";
import Navbar from "../src/app/components/Navigation";
import Head from "next/head";

import Footer from "../src/app/components/Footer";
import AboutContent from "@/app/components/AboutContent";
import FinanceHero from "@/app/components/FinanceHero";
import FinanceContent from "@/app/components/FinanceContent";
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
          <FinanceHero />
          <FinanceContent />
          <Footer />
        </section>
      </main>
    </div>
  );
}

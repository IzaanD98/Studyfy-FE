import React from "react";
import Navbar from "../src/app/components/Navigation";
import Head from "next/head";
import Hero from "../src/app/components/Hero";
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
          <Hero />
        </section>
      </main>
    </div>
  );
}

import React from "react";
import Navbar from "../src/app/components/Navigation";
import Head from "next/head";
import Applicants from "@/app/components/Applicants";

export default function Home({ authenticated }) {
  return (
    <div>
      <Head>
        <title>Studyfy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section>
          <div>
            <Navbar />
            <Applicants authenticated={authenticated} />
          </div>
        </section>
      </main>
    </div>
  );
}

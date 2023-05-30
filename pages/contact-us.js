import React from "react";
import Navbar from "../src/app/components/Navigation";
import Head from "next/head";

import ContactFooter from "../src/app/components/ContactFooter";
import ContactUsForm from "@/app/components/ContactUsForm";
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
          <ContactUsForm />
          <ContactFooter />
        </section>
      </main>
    </div>
  );
}

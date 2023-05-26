import React from "react";

const Testimonials = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="text-center mt-10">
        <h1 className="text-2xl py-2 text-purple-500 font-bold ">
          Testimonials
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl py-5 leading-8 text-gray-600">
            Recognized and relied upon by a multitude of students
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-gray-100 rounded-3xl p-4">
          <img
            src={
              "https://images.unsplash.com/photo-1619380916644-8dbef3724106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            }
            width={75}
            className="rounded-3xl"
          />
          <p className="text-xl text-left py-5 text-gray-800">
            &quot;The staff at Studyfy provided invaluable guidance and support
            throughout my university application process. They offered
            insightful advice, shared valuable interview tips, and demonstrated
            exceptional competence. Whether you&apos;re aiming for admission
            into a prestigious university or simply seeking clarification on
            your educational path, Studyfy is the ideal place to receive the
            assistance you need.&quot;
          </p>
          <p>Juan Kumar</p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-4 ">
          <img
            src={
              "https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            }
            width={75}
            className="rounded-3xl"
          />
          <p className="text-xl text-left py-5 text-gray-800">
            &quot;A friend recommended Studyfy to me, so I decided to pay them a
            visit. I had the pleasure of meeting Katy, who proved to be
            incredibly helpful and knowledgeable. She provided me with clear and
            detailed information about the University of Sunderland,
            internships, and the various possibilities for career development.
            Ted&apos;s friendly nature and reliable guidance left a strong
            impression on me. If you&apos;re looking for a place to clarify your
            doubts or get assistance with university admissions, I highly
            recommend Studyfy.&quot;
          </p>
          <p>Kate Hopkins</p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-4">
          <img
            src={
              "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            }
            width={75}
            className="rounded-3xl"
          />
          <p className="text-xl text-left py-5 text-gray-800">
            &quot;I had an exceptional experience at Studyfy! The environment
            was incredibly professional, and they efficiently handled all the
            necessary arrangements within just one week. If you&apos;re
            interested in pursuing your university education here in the UK, I
            highly recommend giving Studyfy a try. Their expertise and
            dedication will ensure a smooth and successful journey towards your
            educational goals.&quot;
          </p>
          <p>Joe Oregan</p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-4">
          <img
            src={
              "https://images.unsplash.com/photo-1610012525054-b6ab57df6105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            }
            width={75}
            className="rounded-3xl"
          />

          <p className="text-xl text-left py-5 text-gray-800">
            &quot;I had a fantastic experience with Studyfy! The agency has an
            incredibly helpful and friendly staff. When I sought assistance for
            university enrollment, Kenny and Lenny provided me with exceptional
            support, addressing all of my questions with enthusiasm. These boys
            are not only nice and friendly but also highly professional. I
            highly recommend Studyfy for their outstanding services and
            dedicated team.&quot;
          </p>
          <p>Gabi Fernandes</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

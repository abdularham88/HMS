import React from "react";
import img from "./images/doctor-leading-medical-blurry-hospital-background-133236824.jpg";
import { Link } from "react-router-dom";
import img1 from "./images/istockphoto-1270360391-612x612.jpg";
import img2 from "./images/360_F_310613409_bBe2DBeScgbycqwWqPStJK1PREze0u9S.jpg";
import img3 from "./images/caa63926c280ad52dd88ad3bf2437d40.jpg";
import img4 from "./images/png-transparent-free-newspaper-newspaper-free-miscellaneous-ink-electronics.png";
import Contact_us from "./Contact_us";
import Navigation from "./Navigation";


const Home = () => {
  return (
    <>
    <div>
      <Navigation/>
    </div>
      <section className="bg-center bg-no-repeat bg-blend-multiply h-screen">
        <img src={img} alt="" className="absolute blur h-screen w-full " />
        <div className="px-4 mx-auto text-center pb-20 py-24 lg:py-56 relative">
          <h1 className="mb-4 text-4xl  tracking-tight leading-none text-black font-bold md:text-5xl lg:text-6xl">
            The Hospital you trust to care <br /> for those you love
          </h1>
          <p className="mb-8 text-lg font-normal text-black lg:text-xl sm:px-16 lg:px-48">
            We aim to deliver Good Quality care to every patient at an
            affordable cost through <br />
            Comprehensive Integrated
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              to={""}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Meet our Specialists
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <div className="bg-blue-400 py-28 text-center text-white">
        <h1 className="text-6xl pb-20">Our Medical Services</h1>
        <p className="p-5 text-xl px-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi
          non minus iure quis aut numquam voluptate consequuntur saepe adipisci
          repellendus, enim delectus porro maxime, impedit aperiam, ducimus eius
          nisi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Pariatur libero sint officia, consequatur voluptas deleniti nisi odio
          eos accusantium architecto? Sit illum adipisci deleniti autem.
          Excepturi laborum placeat quam laboriosam?
        </p>

        <button
          type="submit"
          class="  p-5 text-sm text-black bg-white  focus:ring-4 focus:outline-none rounded-full font-bold  text-center "
        >
          <Link to={'/Appointment'}>
          Book Appointment
          </Link>
        </button>
      </div>

      <div className="py-20">
        <h1 className="text-center text-5xl text-black pb-20">
          At your Service
        </h1>

        <div className="grid grid-cols-4 grid-rows-1 gap-2 text-center px-8">
          <div>
            <h1 className="text-3xl">Professional Staff</h1>
            <p className="text-xl pt-9 text-gray-600">
              Building a strong and effective <br />
              Professional staff team
            </p>
          </div>

          <div>
            <h1 className="text-3xl">Emergency treatment</h1>
            <p className="text-xl pt-9 text-gray-600">
              Essential steps for <br />
              Emergency treatments
            </p>
          </div>
          <div>
            <h1 className="text-3xl">Trusted Doctors</h1>
            <p className="text-xl pt-9 text-gray-600">
              Finding Reliable and Reputable <br />
              Medical Professionals
            </p>
          </div>
          <div>
            <h1 className="text-3xl">24/7 Services</h1>
            <p className="text-xl pt-9 text-gray-600">
              Round-the-clock Support and <br />
              Assistance available 24/7
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-1 gap-20 pt-20 ">
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="pt-5">
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
        </div>
      </div>

      <div className="justify-center items-center text-center text-white bg-neutral-700 py-20">
        <h1 className="text-6xl pb-20">News & Events</h1>
        <div className="grid grid-cols-3 grid-rows-1 gap-1 pl-24">
          <div></div>
          <div>
            <img src={img4} alt="" className="w-72 " />
          </div>
          <div></div>
        </div>
        <p className="text-xl px-20 pt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam
          quis fugit accusamus earum. Ipsam quibusdam nisi soluta ducimus dolor
          error praesentium quasi aspernatur ratione at, odit, corporis, animi
          quod? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora totam adipisci eum quos quisquam in assumenda et iure? Distinctio, maiores?
        </p>
      </div>

     <div> <Contact_us/> </div>
    </>
  );
};

export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Hero Component
const Hero = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="bg-neutral-900">
        <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
          <h1 className="font-semibold text-white text-5xl md:text-6xl">
            <span className="text-[#ff0]">QuickGrab:</span> Best way to Search
          </h1>
          <div className="max-w-4xl">
            <p className="mt-5 text-neutral-400 text-lg">
              Welcome to your ultimate guide to effortless learning! Our
              interactive map is designed to make discovering any topic a
              breeze. With just a few clicks, you can navigate through a wealth
              of information, tailored to your interests and needs. Say goodbye
              to endless scrolling and complex searches – our intuitive map
              brings all the key points and detailed insights to your
              fingertips. Explore topics seamlessly and unlock the knowledge you
              seek quickly and efficiently. Discover, learn, and succeed with
              our easy search map – your pathway to smarter, faster learning!
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => loginWithRedirect()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

// Clients Component
const Clients = () => (
  <div className="relative overflow-hidden pt-4 bg-neutral-900">
    <svg
      className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2"
      width="2745"
      height="488"
      viewBox="0 0 2745 488"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>

    <div className="relative z-10">
      <div className="max-w-5xl px-4 xl:px-0 mx-auto">
        <div className="mb-4"></div>

        <div className="flex justify-between gap-6">
          <svg
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400"
            enableBackground="new 0 0 2499 614"
            viewBox="0 0 2499 614"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>

          <svg
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947"
            width="2500"
            height="607"
          >
            {/* SVG path */}
          </svg>

          <svg
            className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 text-neutral-400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2428 1002"
          >
            {/* SVG path */}
          </svg>
        </div>
      </div>
    </div>
  </div>
);

// Main Content Component
const MainContent = () => (
  <main id="content">
    <Hero />
    <Clients />
  </main>
);

export default MainContent;

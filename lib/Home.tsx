"use client";

import Image from "next/image";
import Section from "./Section";
import { usePageContext } from "./context";

export default function Home() {
  const context = usePageContext();
  return (
    <Section name="home">
      <div className="flex flex-col items-center justify-center w-full gap-3 py-3 px-10">
        {/* <div className="bg-gray-50 h-20 w-20"></div> */}
        <Image
          src="/hero_image.png"
          height={100}
          width={100}
          alt="A person helping another"
        />
        <h1 className="font-bold items-center flex-col md:flex-row text-white text-6xl md:text-7xl flex uppercase">
          Athletes
          <span className="text-5xl md:text-5xl text-pink-light px-[0.05rem]">
            4
          </span>
          Others
        </h1>
        <h2 className="font-mont text-white text-5xl text-center">
          Tuesday Brunch in Room 503
        </h2>
        <p className="text-white text-2xl italic font-normal font-opensans text-center max-w-[60ch]">
          Providing Lynbrook students with opportunities to coach athletics for
          <span className="text-pink-light"> underprivileged</span> and
          <span className="text-pink-light"> underrepresented</span> youth
          communities.
        </p>
        <br />
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <div className="md:w-[50%] flex flex-col gap-2 items-center">
            <h1 className="font-mont text-4xl text-white">Current Projects</h1>
            <ul className="list-disc text-white font-sans text-3xl">
              <li>Basketball Clinics</li>
              <li>Soccer Practices</li>
            </ul>
            <button
              className="bg-blue-dark px-10 font-sans text-lg py-2 my-2 block rounded-lg text-white hover:bg-pink-light hover:text-black transition-colors duration-300"
              onClick={() => {
                context.setCurrentPage("#projects");
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Learn More
            </button>
          </div>
          <div className="md:w-[50%] flex flex-col gap-2 items-center">
            <h1 className="font-mont text-4xl text-white">What We Cover</h1>
            <ul className="list-disc text-white font-sans text-3xl">
              <li>Opportunities</li>
              <li>Coaching</li>
            </ul>
            <button
              className="bg-blue-dark px-10 font-sans text-lg py-2 my-2 block rounded-lg text-white hover:bg-pink-light hover:text-black transition-colors duration-300"
              onClick={() => {
                context.setCurrentPage("#opportunities");
                document.getElementById("opportunities")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <br />
        <a
          className="bg-blue-dark w-full text-center font-sans text-xl py-3 block rounded-lg text-white hover:bg-pink-light hover:text-black transition-colors duration-300"
          href="https://tinyurl.com/A4Ointerest"
          target="_blank"
          rel="noopener noreferrer"
        >
          SIGN UP
        </a>
      </div>
    </Section>
  );
}

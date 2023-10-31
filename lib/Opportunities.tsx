import Image from "next/image";
import Section from "./Section";

export default function Opportunities() {
  return (
    <Section name="opportunities">
      <h1 className="font-sans text-white uppercase text-5xl text-center font-bold">
        Opportunities
      </h1>
      <div className="grid gap-3 md:grid-cols-5 sm:grid-cols-2 grid-cols-1 px-10 my-5">
        {["Basketball", "Soccer", "Swimming", "Volleyball", "Tennis"].map(
          (item, i) => (
            <div
              key={i}
              className="bg-blue-dark text-pink-light p-3 aspect-[16/12] flex flex-col justify-center items-center gap-1"
              // href="https://google.com"
              // rel="noopener noreferrer"
              // target="_blank"
            >
              <div className="font-mont text-2xl flex items-center gap-1">
                <span className="">{item}</span>
              </div>
              <Image
                src={`/${item.toLowerCase()}.png`}
                height={70}
                width={70}
                alt="Basketball"
                style={{
                  filter:
                    "invert(78%) sepia(5%) saturate(2036%) hue-rotate(287deg) brightness(92%) contrast(117%)",
                }}
              />
            </div>
          )
        )}
      </div>
      <div className="flex justify-center items-center gap-2 pb-2">
        <a
          className="bg-blue-dark px-10 font-sans text-lg py-2 my-2 block rounded-lg text-white hover:bg-pink-light hover:text-black transition-colors duration-300"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdK48jNJZFHAZUXeQPJp1TyVihrpBmg1HzDyvNz9pTXTtX7vA/viewform?usp=sf_link"
          rel="noopener noreferrer"
          target="_blank"
        >
          Coaching Interest
        </a>
        <a
          className="bg-blue-dark px-10 font-sans text-lg py-2 my-2 block rounded-lg text-white hover:bg-pink-light hover:text-black transition-colors duration-300"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdBH--yWkp7XVxhJVvBGot78FFdpJD9wDQB25u6QsBd2hH-vA/viewform?usp=sf_link"
          rel="noopener noreferrer"
          target="_blank"
        >
          Project Proposal
        </a>
      </div>
    </Section>
  );
}

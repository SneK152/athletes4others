import Image from "next/image";
import Section from "./Section";

export default function Team() {
  return (
    <Section name="meettheteam">
      <h1 className="font-sans text-white uppercase text-5xl text-center font-bold">
        Meet the Team
      </h1>
      <div className="flex md:flex-row flex-col justify-center items-center gap-2 py-5">
        {[
          ["President", "Lorem Ipsum"],
          ["Vice President", "Lorem Ipsum"],
          ["Secretary", "Lorem Ipsum"],
          ["Treasurer", "Lorem Ipsum"],
        ].map((person, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="relative aspect-square w-[70%]">
              <Image
                src="/hero_image.png"
                fill
                objectFit="cover"
                alt="A person helping another"
              />
            </div>
            <br />
            <h2 className="font-sans text-white text-xl text-center">
              {person[1]}
            </h2>
            <h3 className="font-sans font-light text-white text-lg text-center">
              {person[0]}
            </h3>
          </div>
        ))}
      </div>
    </Section>
  );
}

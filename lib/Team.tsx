import Image from "next/image";
import Section from "./Section";

export default function Team() {
  return (
    <Section name="meettheteam">
      <h1 className="font-sans text-white uppercase text-5xl text-center font-bold">
        Meet the Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 md:gap-5 place-items-center py-5">
        {[
          ["President", "Harsha Kadiyala"],
          ["VP of Operations", "Samir Mehra"],
          ["VP of Outreach", "Jeffrey Gao"],
          ["Treasurer", "Nina Pan"],
          ["Secretary", "Kylie Liao"],
          ["Director of Soccer", "Uzayr Zameer"],
          ["Director of Basketball", "Eric Huang"],
        ].map((person, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-full"
          >
            <div className="relative aspect-square w-full">
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

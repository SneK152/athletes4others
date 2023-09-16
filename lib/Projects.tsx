import Image from "next/image";
import Section from "./Section";

export default function Projects() {
  return (
    <Section name="whatwevedone">
      <h1 className="font-sans text-white uppercase text-5xl text-center font-bold">
        What We&apos;ve Done
      </h1>
      <div className="w-full grid p-6 gap-5 grid-cols-12 min-h-[24rem]">
        <div className="sm:col-span-5 col-span-12 relative h-36 w-full sm:h-full sm:order-1">
          <Image
            src={"/projects.png"}
            alt="Image of a person helping another"
            layout="fill"
            objectFit="cover"
            className="object-center z-0"
          />
        </div>
        <div
          className={`sm:col-span-7 text-white col-span-12 sm:px-5 flex gap-3 flex-col justify-center sm:order-2`}
        >
          <h1 className="text-4xl uppercase">Ace Schools</h1>
          <div className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            quidem veritatis nostrum omnis officiis delectus soluta assumenda
            dignissimos obcaecati quasi? Nam rerum odit dolorum odio, iusto
            dignissimos magni sequi ut.
          </div>
        </div>
      </div>
      <div className="w-full grid p-6 gap-5 grid-cols-12 min-h-[24rem]">
        <div className="sm:col-span-5 col-span-12 relative h-36 w-full sm:h-full sm:order-2">
          <Image
            src={"/projects.png"}
            alt="Image of a person helping another"
            layout="fill"
            objectFit="cover"
            className="object-center z-0"
          />
        </div>
        <div
          className={`sm:col-span-7 text-white col-span-12 sm:px-5 flex gap-3 flex-col justify-center sm:order-1 text-right`}
        >
          <h1 className="text-4xl uppercase">Bishops</h1>
          <div className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            quidem veritatis nostrum omnis officiis delectus soluta assumenda
            dignissimos obcaecati quasi? Nam rerum odit dolorum odio, iusto
            dignissimos magni sequi ut.
          </div>
        </div>
      </div>
    </Section>
  );
}

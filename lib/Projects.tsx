import Image from "next/image";
import Section from "./Section";

export default function Projects() {
  return (
    <Section name="projects">
      <h1 className="font-sans text-white uppercase text-5xl text-center font-bold">
        Projects
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
          <h1 className="text-4xl uppercase">
            Bishop Elementary Fall Basketball Clinics
          </h1>
          <div className="text-2xl">
            The Athletes4Others x Bishop Elementary Fall Basketball Clinics are
            FREE clinics for students currently attending Bishop Elementary. The
            program will consist of eight basketball clinics and will take place
            every Tuesday + Thursday from 2:20 PM to 3:45 PM starting 9/26. The
            final clinic will take place 10/24 at 2:45 PM and will be a fun 2
            hour session full of games, tournaments, and prizes!
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
          <h1 className="text-4xl uppercase">Weekly Fall Soccer Practices</h1>
          <div className="text-2xl">
            An upcoming opportunity is our once-a-week soccer practices for ALL
            ages. It will take place at Rainbow Park for 1 hr. They are FREE
            practices and a great opportunity to play the sport you love and
            connect with others with the same passion.
          </div>
        </div>
      </div>
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
          <h1 className="text-4xl uppercase">
            Project Proposals FOR FUHSD STUDENTS
          </h1>
          <div className="text-2xl">
            We are looking to branch out our coaching and volunteer services to
            other sports! This is a great way to positively impact the community
            while coaching a sport that you enjoy. If you are interested, fill
            out the Sports Proposal Form and follow the steps.
          </div>
        </div>
      </div>
    </Section>
  );
}

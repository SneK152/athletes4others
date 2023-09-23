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
            <a
              key={i}
              className="bg-blue-dark text-pink-light p-3 aspect-[16/12] flex flex-col justify-center items-center gap-1"
              href="https://google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="font-mont text-2xl flex items-center gap-1">
                <span className="">{item}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  className="fill-white -translate-y-0.5"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
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
            </a>
          )
        )}
      </div>
    </Section>
  );
}

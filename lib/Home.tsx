import Section from "./Section";

export default function Home() {
  return (
    <Section name="home">
      <div className="flex flex-col items-center justify-center w-full gap-3 py-3 px-10">
        <div className="bg-gray-50 h-20 w-20"></div>
        <h1 className="font-bold items-center text-white text-6xl flex uppercase">
          Athletes
          <span className="text-4xl text-pink-light px-[0.05rem]">4</span>
          Others
        </h1>
        <h2 className="font-mont text-white text-4xl">
          Tuesday Lunch in PE 701
        </h2>
        <p className="text-white italic font-normal font-opensans text-center max-w-[75ch]">
          Providing Lynbrook students with opportunities to coach athletics for
          <span className="text-pink-light"> underprivileged</span> and
          <span className="text-pink-light"> underrepresented</span> youth
          communities.
        </p>
      </div>
    </Section>
  );
}

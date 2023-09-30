import Navbar from "@/lib/Navbar";
import Home from "@/lib/Home";
import Team from "@/lib/Team";
import Projects from "@/lib/Projects";
import Opportunities from "@/lib/Opportunities";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <Team />
      <Projects />
      <Opportunities />
      <footer className="pb-2">
        <h1 className="font-sans text-center text-white">
          Copyright © Athletes4Others 2023. Built by Lynbrook Web Development
          Club.
        </h1>
      </footer>
    </main>
  );
}

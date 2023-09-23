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
    </main>
  );
}

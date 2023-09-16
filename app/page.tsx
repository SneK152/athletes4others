import Navbar from "@/lib/Navbar";
import Home from "@/lib/Home";
import { useEffect } from "react";
import Team from "@/lib/Team";
import Projects from "@/lib/Projects";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <Team />
      <Projects />
    </main>
  );
}

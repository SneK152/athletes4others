import Navbar from "@/lib/Navbar";
import Home from "@/lib/Home";
import { useEffect } from "react";
import Team from "@/lib/Team";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <Team />
    </main>
  );
}

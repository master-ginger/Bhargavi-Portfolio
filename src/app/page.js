import Image from "next/image";
import Journey from "./components/Journey";
import Services from "./components/Services";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center ">
      <div>
        
        <Hero/>
        <About/>
        <Journey/>
        <Services/>
      </div>
      
    </div>
  );
}

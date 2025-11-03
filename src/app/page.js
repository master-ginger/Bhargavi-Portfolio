import Image from "next/image";
import Journey from "./components/Journey";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center ">
      <div>
        <Journey/>
        <Services/>
      </div>
      
    </div>
  );
}

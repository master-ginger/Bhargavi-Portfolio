import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
});

export default function Journey() {
  return (
    <div className="px-6 sm:px-10 lg:px-20 py-10">
      {/* Title */}
      <div className="text-center text-4xl sm:text-5xl mb-10 font-extrabold text-[#0874AE]">
        About Me
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/palette.jpg"
            width={350}
            height={350}
            alt="journey image"
            className="rounded-2xl shadow-lg w-64 sm:w-80 md:w-96 object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-gray-200 leading-relaxed text-center lg:text-left">
          {/* Decorative line */}
          

          <div className="text-base sm:text-lg">
            <span
              className={`text-4xl sm:text-5xl font-bold text-[#ffb703] ${dancingScript.className} mr-2`}
            >
              Art
            </span>
            has always been my way of speaking — a language that goes beyond
            words. From the moment I first held a pencil, I knew this was how I
            wanted to express myself: through colors, shapes, and the emotions
            they hold.
          </div>

          <div className="mt-6 text-base sm:text-lg">
            <span
              className={`text-4xl sm:text-5xl font-bold text-[#ffb703] mr-2 ${dancingScript.className}`}
            >
              Creation
            </span>
            is my way of growing. Every new piece challenges me, teaches me, and
            reveals a little more of who I am. I’ve learned to embrace
            imperfection, to let curiosity lead, and to trust the process.
          </div>

          <div className="mt-6 text-base sm:text-lg">
            <span
              className={`text-4xl sm:text-5xl font-bold text-[#ffb703] mr-2 ${dancingScript.className}`}
            >
              Colors
            </span>
            speak where words fall silent. Every creation begins with a feeling —
            a quiet emotion that finds its way onto the canvas. My work is a
            reflection of what I feel, not just what I see.
          </div>

          {/* Bottom decorative line */}
          <div className="font-serif mt-6 text-xl text-gray-400 text-center">
            x-x-x
          </div>
        </div>
      </div>
    </div>
  );
}

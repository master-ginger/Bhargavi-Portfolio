import heroBg from "../../../public/herobg.jpg";

export default function Hero() {
  return (
    <div className="relative w-full h-[100vh] bg-[url('/herobg2.jpg')] bg-cover bg-center flex justify-center items-center overflow-hidden">
      {/* Overlay for blur + darkness */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px]"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 sm:px-8">
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-md">
          Art. Emotion. Essence.
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3 text-gray-200">
          Where Every Color Whispers a Story
        </div>
      </div>
    </div>
  );
}

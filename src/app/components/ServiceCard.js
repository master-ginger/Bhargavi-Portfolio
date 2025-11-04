export default function ServiceCard({ title, descr }) {
  return (
    <div className="w-full sm:w-72 md:w-60 lg:w-64 xl:w-72 h-56 sm:h-64 group bg-[#232323] p-5 rounded-2xl text-white flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-in-out shadow-md hover:shadow-xl">
      
      {/* Title */}
      <div className="absolute text-2xl sm:text-3xl font-semibold text-center transition-all duration-700 ease-in-out transform group-hover:-translate-y-10">
        {title}
      </div>

      {/* Description */}
      <div className="absolute text-sm sm:text-base text-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-700 ease-in-out px-4 sm:px-5 mt-10">
        {descr}
      </div>
    </div>
  );
}

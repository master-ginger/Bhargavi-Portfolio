import Image from "next/image"

export default function ProductCard(props){
    return (
            <div className="w-full sm:w-72 md:w-60 lg:w-full h-56 sm:h-64 group bg-[#232323] rounded-2xl text-white flex items-center justify-center relative overflow-hidden transition-all duration-700 ease-in-out shadow-md hover:shadow-xl">
      
      <div className="flex justify-center">
              <Image
                src={props.url}
                width={250}
                height={250}
                alt="journey image"
                className="rounded-2xl w-64 sm:w-80 md:w-96 object-cover"
              />
            </div>

     
    </div>
       
    )
}
import Image from "next/image"
export default function Journey(){
    return(
        <div>
            <div className="text-center text-5xl mb-10 font-extrabold font-serif">About Me</div>
            <div className="flex justify-around">
            <Image src='/palette.jpg' width={350} height={350} alt="journey image"/>
            <div className="w-[50%] pr-30"> 
                <div className="text-center font-serif mb-4">x-x-x</div>
                <div><span className="text-5xl font-serif font-bold">Art</span> has always been my way of speaking — a language that goes beyond words. From the moment I first held a pencil, I knew this was how I wanted to express myself: through colors, shapes, and the emotions they hold.</div>
                <div className="mt-4"><span className="text-5xl font-serif font-bold">Creation</span> is my way of growing. Every new piece challenges me, teaches me, and reveals a little more of who I am. I’ve learned to embrace imperfection, to let curiosity lead, and to trust the process.</div>
                <div className="mt-4"><span className="text-5xl font-serif font-bold">Colors</span> speak where words fall silent. Every creation begins with a feeling — a quiet emotion that finds its way onto the canvas. My work is a reflection of what I feel, not just what I see.</div>
                <div className="text-center font-serif mt-4">x-x-x</div>
            </div>
        </div>
        </div>
        
    )
}
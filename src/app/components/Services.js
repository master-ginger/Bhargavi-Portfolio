import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="mb-40 px-4 md:px-10">
      <div className="text-center text-4xl sm:text-5xl mt-20 mb-10 font-extrabold">
        Services
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        <ServiceCard 
          title="Customized Paintings" 
          descr="Bring your imagination to life with personalized artwork made just for you." 
        />
        <ServiceCard 
          title="Pencil Sketches" 
          descr="Timeless pencil art capturing expressions and emotions in every stroke." 
        />
        <ServiceCard 
          title="Couple Sketches" 
          descr="Celebrate love with detailed couple portraits that tell your story." 
        />
        <ServiceCard 
          title="Portraits" 
          descr="Realistic and expressive portraits crafted with precision and care." 
        />
        <ServiceCard 
          title="Wall Murals" 
          descr="Transform blank walls into breathtaking pieces of art that inspire." 
        />
        <ServiceCard 
          title="Digital Illustrations" 
          descr="Modern, vibrant digital art perfect for gifts, prints, or branding." 
        />
        <ServiceCard 
          title="Canvas Paintings" 
          descr="Hand-painted masterpieces that add elegance and charm to any space." 
        />
        <ServiceCard 
          title="Pet Portraits" 
          descr="Cherish your furry friends with lifelike pet portraits full of character." 
        />
      </div>
    </div>
  );
}

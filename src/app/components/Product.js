import ProductCard from "./ProductCard"
export default function Product(){
    return (
        <div className="mb-10">
            <div className="text-center text-4xl sm:text-5xl mb-10 font-extrabold ">
                My ArtWork
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
                   <ProductCard url="/painting1.jpg"/>
                   <ProductCard url="/painting2.jpg"/>
                   <ProductCard url="/painting3.jpg"/>
                   <ProductCard url="/painting14.jpg"/>
            </div>
            <div className="grid grid-cols-2 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
                   <ProductCard url="/painting4.jpg"/>
                   <ProductCard url="/painting6.jpg"/>
                   <ProductCard url="/painting7.jpg"/>
                   <ProductCard url="/painting8.jpg"/>
            </div>
            <div className="grid grid-cols-2 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
                   <ProductCard url="/painting9.jpg"/>
                   <ProductCard url="/painting13.jpg"/>
                   <ProductCard url="/painting11.jpg"/>
                   <ProductCard url="/painting12.jpg"/>
            </div>
        </div>
    )
}
import { connectDB } from "../../../../lib/mongodb";
import Product from "../../models/Product";

var mongo_pass ="ZNxTMt7sikW4YOLT";
export async function GET(){
    try{
        await connectDB();
        const products = await Product.find();
        return new Response(JSON.stringify({success:true,products}),{
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
    }catch(err){
        console.log("Error in connection")
    }
}



export async function POST(req) {
  try {
    const body = await req.json();
    const { name, price, description,image } = body;

    if (!name || price == null) {
      return new Response(JSON.stringify({ success: false, error: "Missing name or price" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await connectDB();

    const newProduct = await Product.create({
      name,
      price: Number(price),
      description: description || "",
      image: image || ""
    });

    return new Response(JSON.stringify({ success: true, product: newProduct }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("POST /api/products error:", err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

import { connectDB } from "../../../../../lib/mongodb";
import Product from "@/app/models/Product";

export async function DELETE(req, context) {
  try {
    const params = await context.params; // get the _id of product
    const id = params.id
    await connectDB();

    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return new Response(JSON.stringify({ success: false, message: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
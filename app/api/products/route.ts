import connectDB from "@/lib/connectDb";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await connectDB();

    try {
        const products = await Product.find({});
        return NextResponse.json(products);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

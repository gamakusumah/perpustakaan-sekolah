import connectMongoDB from "@/libs/mongodb";
import Pustakawan from "@/models/pustakawan";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await connectMongoDB();
    const pustakawan = await Pustakawan.findOne({ email }).select("_id");
    console.log("Pustakawan : ", pustakawan);
    return NextResponse.json({ pustakawan });
  } catch (error) {
    console.log(error);
  }
}

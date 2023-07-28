import Peminjaman from "@/models/peminjaman";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { IoBodyOutline } from "react-icons/io5";

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  await connectMongoDB();
  await Peminjaman.findByIdAndUpdate(id, body);
  return NextResponse.json(
    { message: "Peminjaman berhasil diubah" },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const peminjaman = await Peminjaman.findById(id);
  return NextResponse.json({ peminjaman }, { status: 200 });
}

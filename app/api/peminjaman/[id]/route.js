import Peminjaman from "@/models/peminjaman";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newPeminjam: peminjam,
    newBuku: buku,
    newPustakawan: pustakawan,
  } = await req.json();
  await connectMongoDB();
  await Peminjaman.findByIdAndUpdate(id, { peminjam, buku, pustakawan });
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

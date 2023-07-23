import Peminjam from "@/models/peminjam";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { nama, noHp, alamat, status, kelas, angkatan } = await req.json();
  await connectMongoDB();
  await Peminjam.create({ nama, noHp, alamat, status, kelas, angkatan });
  return NextResponse.json(
    { message: "Peminjam berhasil dibuat" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const data = await Peminjam.find();
  return NextResponse.json({ data }, { status: 200 });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Peminjam.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Peminjam berhasil dihapus" },
    { status: 200 }
  );
}

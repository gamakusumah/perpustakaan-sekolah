import Pustakawan from "@/models/pustakawan";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { nama, jabatan, noHp, alamat } = await req.json();
  await connectMongoDB();
  await Pustakawan.create({ nama, jabatan, noHp, alamat });
  return NextResponse.json(
    { message: "Pustakawan berhasil ditambahkan" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const data = await Pustakawan.find();
  return NextResponse.json({ data }, { status: 200 });
}

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Pustakawan.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Pustakawan berhasil dihapus" },
    { status: 200 }
  );
}

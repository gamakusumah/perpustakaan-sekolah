import Pustakawan from "@/models/pustakawan";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newNama: nama,
    newJabatan: jabatan,
    newNoHp: noHp,
    newAlamat: alamat,
  } = await req.json();
  await connectMongoDB();
  await Pustakawan.findByIdAndUpdate(id, { nama, jabatan, noHp, alamat });
  return NextResponse.json(
    { message: "Pustakawan berhasil diubah" },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const pustakawan = await Pustakawan.findById(id);
  return NextResponse.json({ pustakawan });
}

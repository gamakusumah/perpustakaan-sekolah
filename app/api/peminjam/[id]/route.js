import Peminjam from "@/models/peminjam";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newNama: nama,
    newNoHp: noHp,
    newAlamat: alamat,
    newStatus: status,
    newKelas: kelas,
    newAngkatan: angkatan,
  } = await req.json();
  await connectMongoDB();
  await Peminjam.findByIdAndUpdate(id, {
    nama,
    noHp,
    alamat,
    status,
    kelas,
    angkatan,
  });
  return NextResponse.json(
    { message: "Peminjam berhasil diubah" },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const peminjam = await Peminjam.findById(id);
  return NextResponse.json({ peminjam }, { status: 200 });
}

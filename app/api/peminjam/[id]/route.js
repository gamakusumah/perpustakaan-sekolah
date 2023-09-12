import Peminjam from "@/models/peminjam";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { redirect } from "next/navigation";

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

  if (kelas === null || kelas === "") {
    await Peminjam.findByIdAndUpdate(id, {
      nama,
      status,
      noHp,
      alamat,
    });
  } else {
    await Peminjam.findByIdAndUpdate(id, {
      nama,
      status,
      kelas,
      angkatan,
      noHp,
      alamat,
    });
  }

  return NextResponse.json(
    { message: "Peminjam berhasil diubah" },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/404");

  const { id } = params;
  await connectMongoDB();
  const peminjam = await Peminjam.findById(id);
  return NextResponse.json({ peminjam }, { status: 200 });
}

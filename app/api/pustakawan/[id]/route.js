import Pustakawan from "@/models/pustakawan";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { redirect } from "next/navigation";

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
  const session = await getServerSession(authOptions);

  if (!session) redirect("/404");

  const { id } = params;
  await connectMongoDB();
  const pustakawan = await Pustakawan.findById(id);
  return NextResponse.json({ pustakawan });
}

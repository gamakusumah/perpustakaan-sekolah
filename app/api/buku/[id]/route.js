import connectMongoDB from "@/libs/mongodb";
import Buku from "@/models/buku";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newJudul: judul,
    newPengarang: pengarang,
    newPenerbit: penerbit,
    newTahunTerbit: tahunTerbit,
    newIsbn: isbn,
    newStok: stok,
  } = await req.json();
  await connectMongoDB();
  await Buku.findByIdAndUpdate(id, {
    judul,
    pengarang,
    penerbit,
    tahunTerbit,
    isbn,
    stok,
  });
  return NextResponse.json(
    { message: "Buku berhasil diubah" },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/404");

  const { id } = params;
  await connectMongoDB();
  const buku = await Buku.findById(id);
  return NextResponse.json({ buku }, { status: 200 });
}

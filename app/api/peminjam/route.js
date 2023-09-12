import Peminjam from "@/models/peminjam";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function POST(req) {
  const { nama, noHp, alamat, status, kelas, angkatan } = await req.json();

  await connectMongoDB();

  if (kelas === null || kelas === "") {
    await Peminjam.create({ nama, noHp, alamat, status });
  } else {
    await Peminjam.create({ nama, noHp, alamat, status, kelas, angkatan });
  }

  return NextResponse.json(
    { message: "Peminjam berhasil dibuat" },
    { status: 201 }
  );
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Forbidden" });
  }

  await connectMongoDB();
  const data = await Peminjam.find();
  console.log(data);
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

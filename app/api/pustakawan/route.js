import Pustakawan from "@/models/pustakawan";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { nama, jabatan, email, noHp, alamat, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  await connectMongoDB();
  await Pustakawan.create({
    nama,
    jabatan,
    email,
    noHp,
    alamat,
    password: hashedPassword,
  });
  return NextResponse.json(
    { message: "Pustakawan berhasil ditambahkan" },
    { status: 201 }
  );
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/404");

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

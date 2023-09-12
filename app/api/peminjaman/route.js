import Peminjaman from "@/models/peminjaman";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function POST(req) {
  const body = await req.json();
  await connectMongoDB();
  await Peminjaman.create(body);
  return NextResponse.json(
    { message: "Peminjaman berhasil dibuat" },
    { status: 201 }
  );
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/404");

  await connectMongoDB();
  const data = await Peminjaman.find().sort({ createdAt: -1 });
  return NextResponse.json({ data }, { status: 200 });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Peminjaman.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Peminjaman berhasil dihapus" },
    { status: 200 }
  );
}

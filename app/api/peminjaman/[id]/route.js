import Peminjaman from "@/models/peminjaman";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();
  await connectMongoDB();
  await Peminjaman.findByIdAndUpdate(id, body);
  return NextResponse.json(
    { message: "Peminjaman berhasil diubah" },
    { status: 200 }
  );
}

export async function GET(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/404");

  const { id } = params;
  await connectMongoDB();
  const peminjaman = await Peminjaman.findById(id);
  return NextResponse.json({ peminjaman }, { status: 200 });
}

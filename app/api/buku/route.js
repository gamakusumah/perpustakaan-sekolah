import Buku from "@/models/buku";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const dynamic = "force-static";

export async function POST(req) {
  const { judul, pengarang, penerbit, tahunTerbit, isbn, stok } =
    await req.json();
  await connectMongoDB();
  await Buku.create({ judul, pengarang, penerbit, tahunTerbit, isbn, stok });
  return NextResponse.json(
    { message: "Buku berhasil ditambahkan" },
    { status: 201 }
  );
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/404");

  await connectMongoDB();
  const data = await Buku.find();
  return NextResponse.json({ data }, { status: 200 });
}

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Buku.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Buku berhasil dihapus" },
    { status: 200 }
  );
}

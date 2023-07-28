import mongoose, { Schema } from "mongoose";

const peminjamSchema = new Schema(
  {
    nama: String,
    status: String,
    kelas: String || null,
    angkatan: Number || null,
    noHp: String,
    alamat: String,
  },
  {
    timestamps: true,
  }
);

const Peminjam =
  mongoose.models.Peminjam || mongoose.model("Peminjam", peminjamSchema);

export default Peminjam;

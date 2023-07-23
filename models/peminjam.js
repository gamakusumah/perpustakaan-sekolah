import mongoose, { Schema } from "mongoose";

const peminjamSchema = new Schema(
  {
    nama: String,
    noHp: String,
    alamat: String,
    status: String,
    kelas: String || null,
    angkatan: Number,
  },
  {
    timestamps: true,
  }
);

const Peminjam =
  mongoose.models.Peminjam || mongoose.model("Peminjam", peminjamSchema);

export default Peminjam;

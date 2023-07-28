import mongoose, { Schema } from "mongoose";

const peminjamanSchema = new Schema(
  {
    peminjam: {
      _id: String,
      nama: String,
      noHp: String,
      alamat: String,
      status: String,
      kelas: String || null,
      angkatan: Number || null,
    },
    buku: [
      {
        type: new mongoose.Schema({
          _id: String,
          judul: String,
          pengarang: String,
          penerbit: String,
          tahunTerbit: Number,
          isbn: String,
        }),
      },
    ],
    pustakawan: {
      _id: String,
      nama: String,
      jabatan: String,
    },
    tanggalPengembalian: Date || null,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Peminjaman =
  mongoose.models.Peminjaman || mongoose.model("Peminjaman", peminjamanSchema);

export default Peminjaman;

import mongoose, { Schema } from "mongoose";

const bukuSchema = new Schema(
  {
    judul: String,
    pengarang: String,
    penerbit: String,
    tahunTerbit: Number,
    isbn: String,
    stok: Number,
  },
  {
    timestamps: true,
  }
);

const Buku = mongoose.models.Buku || mongoose.model("Buku", bukuSchema);

export default Buku;

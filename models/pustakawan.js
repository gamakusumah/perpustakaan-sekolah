import mongoose, { Schema } from "mongoose";

const pustakawanSchema = new Schema(
  {
    nama: String,
    jabatan: String,
    noHp: String,
    alamat: String,
  },
  {
    timestamps: true,
  }
);

const Pustakawan =
  mongoose.models.Pustakawan || mongoose.model("Pustakawan", pustakawanSchema);

export default Pustakawan;

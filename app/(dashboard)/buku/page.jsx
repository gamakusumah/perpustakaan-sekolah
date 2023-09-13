import BukuTable from "./components/BukuTable";
import { getData } from "@/libs/functions";

export const dynamic = "force-static";

export default async function Buku() {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `https://perpustakaan-sekolah.vercel.app/api/buku`;

  const data = [
    {
      _id: "64bcf6cfe15b16af5f8b060e",
      judul: "Laskar Pelangi",
      pengarang: "Andrea Hirata",
      penerbit: "Bentang Pustaka",
      tahunTerbit: 2005,
      isbn: "979-3062-79-7",
      stok: 7,
      createdAt: "2023-07-23T09:45:51.358Z",
      updatedAt: "2023-07-23T09:45:51.358Z",
      __v: 0,
    },
    {
      _id: "64bcfb77e15b16af5f8b0612",
      judul: "Garis Waktu",
      pengarang: "Andrea Hirata",
      penerbit: "Bentang Pustaka",
      tahunTerbit: 2005,
      isbn: "979-3062-79-7",
      createdAt: "2023-07-23T10:05:43.932Z",
      updatedAt: "2023-07-23T10:11:11.086Z",
      __v: 0,
      stok: 10,
    },
    {
      _id: "64bf855487124602170501db",
      judul: "Konspirasi Alam Semesta",
      pengarang: "Fiersa Besari",
      penerbit: "Mediakita",
      tahunTerbit: 2017,
      isbn: "978-979-794-535-0",
      createdAt: "2023-07-25T08:18:28.676Z",
      updatedAt: "2023-07-25T08:18:28.676Z",
      __v: 0,
    },
    {
      _id: "64c0e541ae0ce069212a1538",
      judul: "Filosofi Teras",
      pengarang: "Henry Manampiring",
      penerbit: "Penerbit Buku Kompas",
      tahunTerbit: 2019,
      isbn: "978-602-412-518-9",
      createdAt: "2023-07-26T09:20:01.037Z",
      updatedAt: "2023-07-26T09:20:01.037Z",
      __v: 0,
    },
    {
      _id: "65002ccf7be8b49e47b7a3a5",
      judul: "Koala Kumal",
      pengarang: "Raditya Dika",
      penerbit: "GagasMedia",
      tahunTerbit: 2015,
      isbn: "978-979-780-299-0",
      createdAt: "2023-09-12T09:18:07.439Z",
      updatedAt: "2023-09-12T09:18:07.439Z",
      __v: 0,
    },
  ];

  return (
    <main>
      <h1 className="font-bold text-2xl text-gray-700 mb-5">Daftar Buku </h1>
      <BukuTable apiUrl={apiUrl} data={data} />
    </main>
  );
}

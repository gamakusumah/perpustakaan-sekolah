import { getData } from "@/libs/functions";
import Table from "./components/Table";

export const dynamic = "force-static";

export default async function Peminjaman() {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/peminjaman`;

  // const { data } = await getData(apiUrl);
  const data = [
    {
      peminjam: {
        _id: "64ff2403012de3eae4273c30",
        nama: "heru",
        noHp: "081234578978",
        alamat: "Jl. Sekeawi No. 10, Margahayu Selatan, Kab. Bandung",
        status: "Siswa",
        kelas: "XI RPL 2",
        angkatan: 2016,
      },
      pustakawan: {
        _id: "64bd107557212509ffd8e253",
        nama: "Heru",
        jabatan: "Petugas",
      },
      _id: "65002ead7be8b49e47b7a3d5",
      buku: [
        {
          _id: "64bcf6cfe15b16af5f8b060e",
          judul: "Laskar Pelangi",
          pengarang: "Andrea Hirata",
          penerbit: "Bentang Pustaka",
          tahunTerbit: 2005,
          isbn: "979-3062-79-7",
        },
        {
          _id: "64c0e541ae0ce069212a1538",
          judul: "Filosofi Teras",
          pengarang: "Henry Manampiring",
          penerbit: "Penerbit Buku Kompas",
          tahunTerbit: 2019,
          isbn: "978-602-412-518-9",
        },
      ],
      status: "Sudah dikembalikan",
      createdAt: "2023-09-12T09:26:05.051Z",
      updatedAt: "2023-09-12T09:27:03.688Z",
      __v: 0,
      tanggalPengembalian: "2023-09-12T09:27:03.579Z",
    },
    {
      peminjam: {
        _id: "64c0b00056e9beba7eeb5466",
        nama: "Gama Kusumah ",
        noHp: "081218533226",
        alamat:
          "Jl. H. Naweng No. 42 RT03/RW07, Margahayu Selatan, Margahayu, Kab. Bandung 40226",
        status: "Siswa",
        kelas: "X RPL 3",
        angkatan: 2016,
      },
      pustakawan: {
        _id: "64bd107557212509ffd8e253",
        nama: "Heru",
        jabatan: "Petugas",
      },
      _id: "64ff1e95012de3eae4273c00",
      buku: [
        {
          _id: "64bf855487124602170501db",
          judul: "Konspirasi Alam Semesta",
          pengarang: "Fiersa Besari",
          penerbit: "Mediakita",
          tahunTerbit: 2017,
          isbn: "978-979-794-535-0",
        },
      ],
      status: "Belum dikembalikan",
      createdAt: "2023-09-11T14:05:09.048Z",
      updatedAt: "2023-09-11T14:05:09.048Z",
      __v: 0,
    },
    {
      peminjam: {
        _id: "64bd13a857212509ffd8e259",
        nama: "M Angga Andriansya",
        noHp: "081254889785",
        alamat: "Jl. Sekeawi No. 10, Margahayu Selatan, Kab. Bandung",
        status: "Staff",
        kelas: "XI RPL 3",
        angkatan: 2016,
      },
      pustakawan: {
        _id: "64bd107557212509ffd8e253",
        nama: "Heru",
        jabatan: "Petugas",
      },
      _id: "64ff18e428932dc3f8310b8f",
      buku: [
        {
          _id: "64c0e541ae0ce069212a1538",
          judul: "Filosofi Teras",
          pengarang: "Henry Manampiring",
          penerbit: "Penerbit Buku Kompas",
          tahunTerbit: 2019,
          isbn: "978-602-412-518-9",
        },
        {
          _id: "64bf855487124602170501db",
          judul: "Konspirasi Alam Semesta",
          pengarang: "Fiersa Besari",
          penerbit: "Mediakita",
          tahunTerbit: 2017,
          isbn: "978-979-794-535-0",
        },
      ],
      status: "Sudah dikembalikan",
      createdAt: "2023-09-11T13:40:52.046Z",
      updatedAt: "2023-09-11T14:01:07.907Z",
      __v: 0,
      tanggalPengembalian: "2023-09-11T14:01:07.779Z",
    },
    {
      peminjam: {
        _id: "64bd13a857212509ffd8e259",
        nama: "M Angga Andriansya",
        noHp: "081254889785",
        alamat: "Jl. Sekeawi No. 10, Margahayu Selatan, Kab. Bandung",
        status: "Siswa",
        kelas: "XI RPL 3",
        angkatan: 2016,
      },
      pustakawan: {
        _id: "64bd107557212509ffd8e253",
        nama: "Heru",
        jabatan: "Petugas",
      },
      _id: "64f45e17b1f3cf95c3b2b862",
      buku: [
        {
          _id: "64bcfb77e15b16af5f8b0612",
          judul: "Garis Waktu",
          pengarang: "Andrea Hirata",
          penerbit: "Bentang Pustaka",
          tahunTerbit: 2005,
          isbn: "979-3062-79-7",
        },
        {
          _id: "64bf855487124602170501db",
          judul: "Konspirasi Alam Semesta",
          pengarang: "Fiersa Besari",
          penerbit: "Mediakita",
          tahunTerbit: 2017,
          isbn: "978-979-794-535-0",
        },
      ],
      status: "Sudah dikembalikan",
      createdAt: "2023-09-03T10:21:11.528Z",
      updatedAt: "2023-09-03T10:22:28.045Z",
      __v: 0,
      tanggalPengembalian: "2023-09-03T10:22:27.958Z",
    },
    {
      peminjam: {
        _id: "64c21348bb3618cb9d1f6c27",
        nama: "Rehan",
        noHp: "084567895465",
        alamat:
          "Jl. Jadek No. 24 RT03/RW07, Margahayu Selatan, Margahayu, Kab. Bandung 40226",
        status: "Guru",
        kelas: "",
        angkatan: null,
      },
      pustakawan: {
        _id: "64bd107557212509ffd8e253",
        nama: "Heru",
        jabatan: "Petugas",
      },
      _id: "64c367a4e088d24490cbd016",
      buku: [
        {
          _id: "64bcfb77e15b16af5f8b0612",
          judul: "Garis Waktu",
          pengarang: "Andrea Hirata",
          penerbit: "Bentang Pustaka",
          tahunTerbit: 2005,
          isbn: "979-3062-79-7",
        },
      ],
      status: "Sudah dikembalikan",
      createdAt: "2023-07-28T07:00:52.973Z",
      updatedAt: "2023-08-04T09:58:23.608Z",
      __v: 0,
      tanggalPengembalian: "2023-08-04T09:58:23.523Z",
    },
    {
      peminjam: {
        _id: "64bd13a857212509ffd8e259",
        nama: "M Angga Andriansya",
        noHp: "081254889785",
        alamat: "Jl. Sekeawi No. 10, Margahayu Selatan, Kab. Bandung",
        status: "Siswa",
        kelas: "XI RPL 3",
        angkatan: 2016,
      },
      pustakawan: {
        _id: "64bd107557212509ffd8e253",
        nama: "Heru",
        jabatan: "Petugas",
      },
      _id: "64c2786816426d5624a5e89b",
      buku: [
        {
          _id: "64bf855487124602170501db",
          judul: "Konspirasi Alam Semesta",
          pengarang: "Fiersa Besari",
          penerbit: "Mediakita",
          tahunTerbit: 2017,
          isbn: "978-979-794-535-0",
        },
        {
          _id: "64bcf6cfe15b16af5f8b060e",
          judul: "Laskar Pelangi",
          pengarang: "Andrea Hirata",
          penerbit: "Bentang Pustaka",
          tahunTerbit: 2005,
          isbn: "979-3062-79-7",
        },
      ],
      status: "Sudah dikembalikan",
      createdAt: "2023-07-27T14:00:09.010Z",
      updatedAt: "2023-07-27T14:07:23.680Z",
      __v: 0,
      tanggalPengembalian: "2023-07-27T14:07:23.581Z",
    },
    {
      peminjam: {
        _id: "64c0b00056e9beba7eeb5466",
        nama: "Gama Kusumah ",
        noHp: "081218533226",
        alamat:
          "Jl. H. Naweng No. 42 RT03/RW07, Margahayu Selatan, Margahayu, Kab. Bandung 40226",
        status: "Siswa",
        kelas: "X RPL 3",
        angkatan: 2016,
      },
      pustakawan: {
        _id: "64bd107557212509ffd8e253",
        nama: "Heru",
        jabatan: "Petugas",
      },
      _id: "64c2770b16426d5624a5e882",
      buku: [
        {
          _id: "64bcf6cfe15b16af5f8b060e",
          judul: "Laskar Pelangi",
          pengarang: "Andrea Hirata",
          penerbit: "Bentang Pustaka",
          tahunTerbit: 2005,
          isbn: "979-3062-79-7",
        },
        {
          _id: "64bcfb77e15b16af5f8b0612",
          judul: "Garis Waktu",
          pengarang: "Andrea Hirata",
          penerbit: "Bentang Pustaka",
          tahunTerbit: 2005,
          isbn: "979-3062-79-7",
        },
      ],
      status: "Sudah dikembalikan",
      createdAt: "2023-07-27T13:54:19.337Z",
      updatedAt: "2023-07-27T13:57:14.527Z",
      __v: 0,
      tanggalPengembalian: "2023-07-27T13:57:14.452Z",
    },
  ];
  return (
    <main>
      <h1 className="font-bold text-2xl text-gray-700 mb-5">
        Daftar Peminjaman
      </h1>
      <Table apiUrl={apiUrl} data={data} />
    </main>
  );
}

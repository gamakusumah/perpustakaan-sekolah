import EditForm from "../../components/EditForm";
import { getData, getDataById } from "@/libs/functions";

export const dynamic = "force-static";

const EditPage = async ({ params }) => {
  const hostUrl = process.env.HOST_URL;
  const peminjamanApiUrl = `${hostUrl}/api/peminjaman`;
  const peminjamApiUrl = `${hostUrl}/api/peminjam`;
  const bukuApiUrl = `${hostUrl}/api/buku`;

  const id = params.id;

  // const { peminjaman } = await getDataById(peminjamanApiUrl, id);
  // const { data: dataPeminjam } = await getData(peminjamApiUrl);
  // const { data: dataBuku } = await getData(bukuApiUrl);
  const peminjaman = {
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
  };
  const dataPeminjam = [
    {
      _id: "64bd13a857212509ffd8e259",
      nama: "M Angga Andriansya",
      noHp: "081254889785",
      alamat: "Jl. Sekeawi No. 10, Margahayu Selatan, Kab. Bandung",
      status: "Staff",
      kelas: "XI RPL 3",
      angkatan: 2016,
      createdAt: "2023-07-23T11:48:56.667Z",
      updatedAt: "2023-09-11T14:35:19.842Z",
      __v: 0,
    },
    {
      _id: "64c0b00056e9beba7eeb5466",
      nama: "Gama Kusumah ",
      status: "Siswa",
      kelas: "X RPL 3",
      angkatan: 2016,
      noHp: "081218533226",
      alamat:
        "Jl. H. Naweng No. 42 RT03/RW07, Margahayu Selatan, Margahayu, Kab. Bandung 40226",
      createdAt: "2023-07-26T05:32:48.994Z",
      updatedAt: "2023-07-26T05:32:48.994Z",
      __v: 0,
    },
    {
      _id: "64ff2403012de3eae4273c30",
      nama: "heru",
      status: "Siswa",
      kelas: "XI RPL 2",
      angkatan: 2016,
      noHp: "081234578978",
      alamat: "Jl. Sekeawi No. 10, Margahayu Selatan, Kab. Bandung",
      createdAt: "2023-09-11T14:28:19.093Z",
      updatedAt: "2023-09-11T14:28:19.093Z",
      __v: 0,
    },
    {
      _id: "64ff245e012de3eae4273c37",
      nama: "Rehan",
      status: "Guru",
      noHp: "081234567897",
      alamat:
        "Jl. Jadek No. 24 RT03/RW07, Margahayu Selatan, Margahayu, Kab. Bandung 40226",
      createdAt: "2023-09-11T14:29:50.646Z",
      updatedAt: "2023-09-11T14:35:26.979Z",
      __v: 0,
      angkatan: null,
      kelas: null,
    },
    {
      _id: "65002d447be8b49e47b7a3b1",
      nama: "Kemal Ramadhan",
      status: "Siswa",
      kelas: "XII RPL 3",
      angkatan: 2019,
      noHp: "0897845612365",
      alamat: "Jl. Cilebak No. 123, Rancamanyar",
      createdAt: "2023-09-12T09:20:04.441Z",
      updatedAt: "2023-09-12T09:20:54.663Z",
      __v: 0,
    },
  ];
  const dataBuku = [
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
      <EditForm
        apiUrl={peminjamanApiUrl}
        dataPeminjam={dataPeminjam}
        dataBuku={dataBuku}
        peminjaman={peminjaman}
      />
    </main>
  );
};

export default EditPage;

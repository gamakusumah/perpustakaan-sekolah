import Table from "./components/Table";
import { getData } from "@/libs/functions";

export const dynamic = "force-static";

export default async function PeminjamPage() {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/peminjam`;

  // const { data } = await getData(apiUrl);
  const data = [
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

  return (
    <main>
      <h1 className="font-bold text-2xl text-gray-700 mb-5">Daftar Peminjam</h1>
      <Table apiUrl={apiUrl} data={data} />
    </main>
  );
}

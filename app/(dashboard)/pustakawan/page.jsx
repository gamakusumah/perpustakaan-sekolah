import Table from "./components/Table";
import { getData } from "@/libs/functions";

export const dynamic = "force-static";

const hostUrl = process.env.HOST_URL;
const apiUrl = `${hostUrl}/api/pustakawan`;

const PustakawanPage = async () => {
  // const { data } = await getData(apiUrl);
  const data = {
    _id: "64f34acef1f51d7b0786f63f",
    nama: "Gama Kusumah ",
    jabatan: "Kepala",
    email: "gamakusumah@gmail.com",
    noHp: "085173220201",
    password: "$2a$10$tsWfotNogoz6flZLVqSdLeKEfvTmjKzRF8SU56im8W.JiSCne/FcG",
    alamat:
      "Jl. H. Naweng No. 42 RT03/RW07, Margahayu Selatan, Margahayu, Kab. Bandung 40226",
    createdAt: "2023-09-02T14:46:38.141Z",
    updatedAt: "2023-09-02T14:46:38.141Z",
    __v: 0,
  };

  return (
    <main>
      <h1 className="font-bold text-2xl text-gray-700 mb-5">
        Daftar Pustakawan
      </h1>
      <Table apiUrl={apiUrl} data={data} />
    </main>
  );
};

export default PustakawanPage;

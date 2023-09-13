import { headers } from "next/headers";
import EditForm from "../../components/EditForm";

const hostUrl = process.env.HOST_URL;
const apiUrl = `${hostUrl}/api/pustakawan`;

export const dynamic = "force-static";

const getPustakawan = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/${id}`, {
      method: "GET",
      headers: headers(),
    });

    if (!res.ok) {
      throw new Error("Gagal mengambil data pustakawan");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditPage = async ({ params }) => {
  const id = params.id;
  // const { pustakawan } = await getPustakawan(id);
  const pustakawan = {
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
      <EditForm apiUrl={apiUrl} pustakawan={pustakawan} />
    </main>
  );
};

export default EditPage;

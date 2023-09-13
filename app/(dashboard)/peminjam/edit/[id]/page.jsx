import { headers } from "next/headers";
import EditForm from "../../components/EditForm";

const hostUrl = process.env.HOST_URL;
const apiUrl = `${hostUrl}/api/peminjam`;

export const dynamic = "force-static";

const getPeminjam = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/${id}`, {
      method: "GET",
      headers: headers(),
    });

    if (!res.ok) {
      throw new Error("Gagal mengambil data peminjam");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditPage = async ({ params }) => {
  const id = params.id;
  // const { peminjam } = await getPeminjam(id);
  const peminjam = {
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
  };

  return (
    <main>
      <EditForm apiUrl={apiUrl} peminjam={peminjam} />
    </main>
  );
};

export default EditPage;

import { headers } from "next/headers";
import EditForm from "../../components/EditForm";

const hostUrl = process.env.HOST_URL;
const apiUrl = `${hostUrl}/api/pustakawan`;

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
  const { pustakawan } = await getPustakawan(id);
  return (
    <main>
      <EditForm apiUrl={apiUrl} pustakawan={pustakawan} />
    </main>
  );
};

export default EditPage;

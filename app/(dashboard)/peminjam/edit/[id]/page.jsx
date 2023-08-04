import EditForm from "../../components/EditForm";

const hostUrl = process.env.HOST_URL;
const apiUrl = `${hostUrl}/api/peminjam`;

const getPeminjam = async (id) => {
  try {
    const res = await fetch(`${apiUrl}/${id}`, {
      cache: "no-store",
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
  const { peminjam } = await getPeminjam(id);

  return (
    <main>
      <EditForm apiUrl={apiUrl} peminjam={peminjam} />
    </main>
  );
};

export default EditPage;

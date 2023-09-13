import EditForm from "../../components/EditForm";
import { getData, getDataById } from "@/libs/functions";

export const dynamic = "force-static";

const EditPage = async ({ params }) => {
  const hostUrl = process.env.HOST_URL;
  const peminjamanApiUrl = `${hostUrl}/api/peminjaman`;
  const peminjamApiUrl = `${hostUrl}/api/peminjam`;
  const bukuApiUrl = `${hostUrl}/api/buku`;

  const id = params.id;

  const { peminjaman } = await getDataById(peminjamanApiUrl, id);
  const { data: dataPeminjam } = await getData(peminjamApiUrl);
  const { data: dataBuku } = await getData(bukuApiUrl);

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

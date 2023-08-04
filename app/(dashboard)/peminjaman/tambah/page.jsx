import TambahForm from "../components/TambahForm";
import { getData } from "@/libs/functions";

const TambahPage = async () => {
  const hostUrl = process.env.HOST_URL;
  const peminjamanApiUrl = `${hostUrl}/api/peminjaman`;
  const peminjamApiUrl = `${hostUrl}/api/peminjam`;
  const bukuApiUrl = `${hostUrl}/api/buku`;

  const { data: dataPeminjam } = await getData(peminjamApiUrl);
  const { data: dataBuku } = await getData(bukuApiUrl);

  return (
    <main>
      <TambahForm
        apiUrl={peminjamanApiUrl}
        dataPeminjam={dataPeminjam}
        dataBuku={dataBuku}
      />
    </main>
  );
};

export default TambahPage;

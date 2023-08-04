import Table from "./components/Table";
import { getData } from "@/libs/functions";

export default async function PeminjamPage() {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/peminjam`;

  const { data } = await getData(apiUrl);
  return (
    <main>
      <h1 className="font-bold text-2xl text-gray-700 mb-5">Daftar Peminjam</h1>
      <Table apiUrl={apiUrl} data={data} />
    </main>
  );
}

import { getData } from "@/libs/functions";
import Table from "./components/Table";

export default async function Peminjaman() {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/peminjaman`;

  const { data } = await getData(apiUrl);
  return (
    <main>
      <h1 className="font-bold text-2xl text-gray-700 mb-5">
        Daftar Peminjaman
      </h1>
      <Table apiUrl={apiUrl} data={data} />
    </main>
  );
}

import BukuTable from "./components/BukuTable";
import { getData } from "@/libs/functions";

export const dynamic = "force-static";

export default async function Buku() {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `https://perpustakaan-sekolah.vercel.app/api/buku`;

  const { data } = (await getData(apiUrl)) || [];
  return (
    <main>
      <h1 className="font-bold text-2xl text-gray-700 mb-5">Daftar Buku</h1>
      <BukuTable apiUrl={apiUrl} data={data} />
    </main>
  );
}

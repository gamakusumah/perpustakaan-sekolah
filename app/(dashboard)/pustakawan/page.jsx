import Table from "./components/Table";
import { getData } from "@/libs/functions";

export const dynamic = "force-static";

const hostUrl = process.env.HOST_URL;
const apiUrl = `${hostUrl}/api/pustakawan`;

const PustakawanPage = async () => {
  const { data } = await getData(apiUrl);

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

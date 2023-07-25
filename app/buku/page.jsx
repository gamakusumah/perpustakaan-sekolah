import BukuTable from "@/app/buku/components/BukuTable";

export default async function Buku() {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/buku`;

  const getData = async () => {
    try {
      const res = await fetch(apiUrl, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    } catch (error) {
      console.log("Error loading data: ", error);
    }
  };

  const { data } = await getData();
  return (
    <main>
      <h1 className="font-bold text-2xl text-gray-700 mb-5">Daftar Buku</h1>
      <BukuTable apiUrl={apiUrl} data={data} />
    </main>
  );
}

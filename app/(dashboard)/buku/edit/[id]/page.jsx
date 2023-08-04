import React from "react";
import EditForm from "../../components/EditForm";

const EditPage = async ({ params }) => {
  const id = params.id;
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/buku`;

  const getBuku = async () => {
    try {
      const res = await fetch(`${apiUrl}/${id}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Gagal memuat data buku");
      }

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const { buku } = await getBuku();

  return (
    <main>
      <EditForm buku={buku} apiUrl={apiUrl} />
    </main>
  );
};

export default EditPage;

import React from "react";
import EditForm from "../../components/EditForm";
import { getDataById } from "@/libs/functions";

export const dynamic = "force-static";

const EditPage = async ({ params }) => {
  const id = params.id;
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/buku`;

  // const { buku } = await getDataById(apiUrl, id);
  const buku = {
    _id: "64bcf6cfe15b16af5f8b060e",
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    penerbit: "Bentang Pustaka",
    tahunTerbit: 2005,
    isbn: "979-3062-79-7",
    stok: 7,
    createdAt: "2023-07-23T09:45:51.358Z",
    updatedAt: "2023-07-23T09:45:51.358Z",
    __v: 0,
  };

  return (
    <main>
      <EditForm buku={buku} apiUrl={apiUrl} />
    </main>
  );
};

export default EditPage;

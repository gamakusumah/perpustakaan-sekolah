import React from "react";
import EditForm from "../../components/EditForm";
import { getDataById } from "@/libs/functions";

export const dynamic = "force-static";

const EditPage = async ({ params }) => {
  const id = params.id;
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/buku`;

  const { buku } = await getDataById(apiUrl, id);

  return (
    <main>
      <EditForm buku={buku} apiUrl={apiUrl} />
    </main>
  );
};

export default EditPage;

import { headers } from "next/headers";

export const getData = async (apiUrl) => {
  try {
    const res = await fetch(apiUrl, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error("Gagal memuat data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDataById = async (apiUrl, id) => {
  try {
    const res = await fetch(`${apiUrl}/${id}`, {
      method: "GET",
      headers: headers(),
    });

    if (!res.ok) {
      throw new Error("Gagal mengambil data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

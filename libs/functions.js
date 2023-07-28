export const getData = async (apiUrl) => {
  try {
    const res = await fetch(apiUrl, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Gagal memuat data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const createData = async (apiUrl, body, router, model) => {
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      router.refresh();
      router.push(`/${model}`);
    } else {
      throw new Error(`Gagal menambah ${model}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDataById = async (apiUrl, id) => {
  try {
    const res = await fetch(`${apiUrl}/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Gagal mengambil data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const setPengembalian = async (
  apiUrl,
  tanggalPengembalian,
  status,
  router
) => {
  try {
    const res = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ tanggalPengembalian, status }),
    });

    if (res.ok) {
      router.refresh();
      router.push(`/peminjaman`);
    }
  } catch (error) {
    console.log(error);
  }
};

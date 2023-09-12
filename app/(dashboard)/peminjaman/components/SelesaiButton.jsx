"use client";
import { useRouter } from "next/navigation";

const SelesaiButton = (props) => {
  const router = useRouter();

  const setPengembalian = async (apiUrl, tanggalPengembalian, status) => {
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

  const handleSelesai = () => {
    const confirmed = confirm("Apakah buku sudah dikembalikan?");

    if (confirmed) {
      const tanggalPengembalian = Date.now();
      const status = "Sudah dikembalikan";
      setPengembalian(props.apiUrl, tanggalPengembalian, status);
    }
  };

  return (
    <button
      type="submit"
      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={() => handleSelesai()}
    >
      Peminjaman Selesai
    </button>
  );
};

export default SelesaiButton;

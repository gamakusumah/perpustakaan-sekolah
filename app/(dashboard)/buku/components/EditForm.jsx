"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditForm = (props) => {
  const [newJudul, setNewJudul] = useState(props.buku.judul);
  const [newPengarang, setNewPengarang] = useState(props.buku.pengarang);
  const [newPenerbit, setNewPenerbit] = useState(props.buku.penerbit);
  const [newTahunTerbit, setNewTahunTerbit] = useState(props.buku.tahunTerbit);
  const [newIsbn, setNewISBN] = useState(props.buku.isbn);

  const router = useRouter();
  const apiUrl = props.apiUrl;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = confirm("Ubah data buku?");

    if (confirmed) {
      try {
        const res = await fetch(`${apiUrl}/${props.buku._id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newJudul,
            newPengarang,
            newPenerbit,
            newTahunTerbit,
            newIsbn,
          }),
        });

        if (res.ok) {
          router.refresh();
          router.push("/buku");
        } else {
          throw new Error("Gagal mengubah buku");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
        Ubah buku baru
      </h2>
      <div className="p-4 max-w-2xl bg-white dark:bg-gray-900 rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                for="judul"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Judul
              </label>
              <input
                type="text"
                name="judul"
                id="judul"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Judul Buku"
                required=""
                value={newJudul}
                onChange={(e) => setNewJudul(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                for="pengarang"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pengarang
              </label>
              <input
                type="text"
                name="pengarang"
                id="pengarang"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Pengarang Buku"
                required=""
                value={newPengarang}
                onChange={(e) => setNewPengarang(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                for="penerbit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Penerbit
              </label>
              <input
                type="text"
                name="penerbit"
                id="penerbit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Penerbit Buku"
                required=""
                value={newPenerbit}
                onChange={(e) => setNewPenerbit(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                for="tahun-terbit"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tahun Terbit
              </label>
              <input
                type="number"
                name="tahun-terbit"
                id="tahun-terbit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="2023"
                required=""
                value={newTahunTerbit}
                onChange={(e) => setNewTahunTerbit(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label
                for="isbn"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ISBN
              </label>
              <input
                type="text"
                name="isbn"
                id="isbn"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="000-000-000-000-0"
                required=""
                value={newIsbn}
                onChange={(e) => setNewISBN(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Ubah buku
            </button>

            <Link
              href="/buku"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Batal
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditForm;

"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditForm = (props) => {
  const router = useRouter();
  const apiUrl = props.apiUrl;
  const pustakawan = props.pustakawan;

  const [newNama, setNewNama] = useState(pustakawan.nama);
  const [newJabatan, setNewJabatan] = useState(pustakawan.jabatan);
  const [newNoHp, setNewNoHp] = useState(pustakawan.noHp);
  const [newAlamat, setNewAlamat] = useState(pustakawan.alamat);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/${pustakawan._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newNama, newJabatan, newNoHp, newAlamat }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/pustakawan");
      } else {
        throw new Error("Gagal mengubah data pustakawan");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
        Ubah Data Pustakawan
      </h2>
      <div className="p-4 max-w-2xl bg-white dark:bg-gray-900 rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                for="nama"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Pustakawan
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nama Pustakawan"
                required=""
                onChange={(e) => setNewNama(e.target.value)}
                value={newNama}
              />
            </div>
            <div className="w-full">
              <label
                for="jabatan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Jabatan
              </label>
              <select
                id="jabatan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={(e) => setNewJabatan(e.target.value)}
                alue={newJabatan}
              >
                <option value="Kepala">Kepala</option>
                <option value="Petugas">Petugas</option>
              </select>
            </div>
            <div className="w-full">
              <label
                for="no-handphone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                No Handphone
              </label>
              <input
                type="number"
                name="no-handphone"
                id="no-handphone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="08123456789"
                required=""
                onChange={(e) => setNewNoHp(e.target.value)}
                value={newNoHp}
              />
            </div>
            <div className="w-full lg:col-span-2">
              <label
                for="newAlamat"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                newAlamat
              </label>
              <input
                type="text"
                name="newAlamat"
                id="newAlamat"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Alamat"
                required=""
                onChange={(e) => setNewAlamat(e.target.value)}
                value={newAlamat}
              />
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Ubah Pustakawan
            </button>

            <Link
              href="/pustakawan"
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

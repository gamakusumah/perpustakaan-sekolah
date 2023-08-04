"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditForm = (props) => {
  const router = useRouter();
  const apiUrl = props.apiUrl;
  const peminjam = props.peminjam;

  const [newNama, setNewNama] = useState(peminjam.nama);
  const [newStatus, setNewStatus] = useState(peminjam.status);
  const [newKelas, setNewKelas] = useState(peminjam.kelas || null);
  const [newAngkatan, setNewAngkatan] = useState(peminjam.angkatan || null);
  const [newNoHp, setNewNoHp] = useState(peminjam.noHp);
  const [newAlamat, setNewAlamat] = useState(peminjam.alamat);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = confirm("Yakin ubah data peminjam?");

    try {
      if (confirmed) {
        const res = await fetch(`${apiUrl}/${peminjam._id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newNama,
            newStatus,
            newKelas,
            newAngkatan,
            newNoHp,
            newAlamat,
          }),
        });

        if (res.ok) {
          router.refresh();
          router.push("/peminjam");
        } else {
          throw new Error("Gagal mengubah data peminjam");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatus = (value) => {
    if (newStatus === "Siswa") {
      setNewStatus(value);
    } else {
      setNewStatus(value);
      setNewKelas(null);
      setNewAngkatan(null);
    }
  };

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
        Ubah Data Peminjam
      </h2>
      <div className="p-4 max-w-2xl bg-white dark:bg-gray-900 rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                htmlFor="nama"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nama Peminjam
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nama Peminjam"
                required=""
                onChange={(e) => setNewNama(e.target.value)}
                value={newNama}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={(e) => handleStatus(e.target.value)}
                value={newStatus}
              >
                <option value="Siswa">Siswa</option>
                <option value="Guru">Guru</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            <div className="w-full">
              <label
                htmlFor="kelas"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Kelas
                <span className="text-xs font-normal text-gray-500 italic">
                  {" "}
                  * hanya untuk siswa
                </span>
              </label>
              <input
                type="text"
                name="kelas"
                id="kelas"
                className="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="X RPL 3"
                onChange={(e) => setNewKelas(e.target.value.toUpperCase())}
                disabled={newStatus === "Siswa" ? false : true}
                value={newKelas}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="angkatan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Angkatan
                <span className="text-xs font-normal text-gray-500 italic">
                  {" "}
                  * hanya untuk siswa
                </span>
              </label>
              <input
                type="number"
                name="angkatan"
                id="angkatan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="2023"
                min={0}
                onChange={(e) => setNewAngkatan(e.target.value)}
                disabled={newStatus === "Siswa" ? false : true}
                value={newAngkatan}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="noHp"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                No Handphone
              </label>
              <input
                type="number"
                name="noHp"
                id="noHp"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="08123456789"
                required=""
                min={0}
                onChange={(e) => setNewNoHp(e.target.value)}
                value={newNoHp}
              />
            </div>
            <div className="w-full lg:col-span-2">
              <label
                htmlFor="alamat"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Alamat
              </label>
              <input
                type="text"
                name="alamat"
                id="alamat"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Alamat Peminjam"
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
              Ubah Peminjam
            </button>

            <Link
              href="/peminjam"
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

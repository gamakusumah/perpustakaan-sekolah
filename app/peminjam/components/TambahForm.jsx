"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TambahForm = (props) => {
  const [nama, setNama] = useState("");
  const [status, setStatus] = useState("Siswa");
  const [kelas, setKelas] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");

  const router = useRouter();
  const apiUrl = props.apiUrl;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ nama, status, kelas, angkatan, noHp, alamat }),
      });

      if (res.ok) {
        router.refresh();
        router.push("/peminjam");
      } else {
        throw new Error("Gagal menambah peminjam");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold text-gray-700 dark:text-white">
        Tambah Peminjam Baru
      </h2>
      <div className="p-4 max-w-2xl bg-white dark:bg-gray-900 rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                for="nama"
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
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div>
              <label
                for="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Siswa">Siswa</option>
                <option value="Guru">Guru</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            <div className="w-full">
              <label
                for="kelas"
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
                onChange={(e) => setKelas(e.target.value.toUpperCase())}
                disabled={status === "Siswa" ? false : true}
              />
            </div>
            <div className="w-full">
              <label
                for="angkatan"
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
                onChange={(e) => setAngkatan(e.target.value)}
                disabled={status === "Siswa" ? false : true}
              />
            </div>
            <div className="w-full">
              <label
                for="noHp"
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
                onChange={(e) => setNoHp(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <label
                for="alamat"
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
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Tambah Peminjam
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

export default TambahForm;

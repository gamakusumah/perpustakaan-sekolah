"use client";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EditForm = (props) => {
  const router = useRouter();

  const apiUrl = props.apiUrl;
  const dataPeminjam = props.dataPeminjam || [];
  const dataBuku = props.dataBuku || [];
  const peminjaman = props.peminjaman || {};

  const [searchPeminjam, setSearchPeminjam] = useState("");
  const [searchBuku, setSearchBuku] = useState("");

  const [peminjam, setPeminjam] = useState(peminjaman.peminjam);
  const [buku, setBuku] = useState(peminjaman.buku);
  const pustakawan = peminjaman.pustakawan;
  const status = peminjaman.status;

  const handlePeminjam = (value) => {
    const confirmed = confirm("Ubah data peminjam?");
    if (confirmed) {
      setPeminjam(value);
      setSearchPeminjam("");
    }
  };

  const handleBuku = (value) => {
    const newBuku = buku;
    if (newBuku.includes(value)) {
      alert("Buku sudah ditambahkan!");
    } else {
      const confirmed = confirm("Ganti buku dengan yang baru?");
      if (confirmed) {
        newBuku.push(value);
        setBuku(newBuku);
        setSearchBuku("");
      }
    }
  };

  function deleteBuku(value) {
    const confirmed = confirm("Hapus buku?");
    if (confirmed) {
      const newBuku = buku.filter((b) => b._id !== value._id);
      setBuku(newBuku);
    }
  }

  async function handleSubmit(e) {
    const confirmed = confirm("Tambah peminjaman baru?");

    if (confirmed) {
      e.preventDefault();

      try {
        const res = await fetch(`${apiUrl}/${peminjaman._id}`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ peminjam, buku, pustakawan }),
        });

        if (res.ok) {
          router.refresh();
          router.push(`/peminjaman/${peminjaman._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="w-full mb-7">
        <div className="lg:flex justify-between mb-3 items-center">
          <h2 className="text-xl font-bold text-gray-700 dark:text-white">
            Data Peminjam
          </h2>

          {/* Search Bar */}
          <div className="relative mt-5 lg:mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MdSearch
                className="text-gray-500 dark:text-gray-400"
                size={20}
              />
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari Peminjam"
              value={searchPeminjam}
              onChange={(e) => setSearchPeminjam(e.target.value)}
            />

            {/* Search result dropdown */}
            <div
              className={`bg-white w-full absolute mt-1 rounded-xl max-h-52 overflow-y-scroll ${
                searchPeminjam !== "" ? "visible" : "hidden"
              }`}
            >
              {dataPeminjam
                .filter((peminjam) => {
                  return searchPeminjam.toLocaleLowerCase() === ""
                    ? peminjam
                    : peminjam.nama.toLowerCase().includes(searchPeminjam) ||
                        peminjam.status
                          .toLowerCase()
                          .includes(searchPeminjam) ||
                        peminjam.kelas.toLowerCase().includes(searchPeminjam) ||
                        peminjam.noHp.toLowerCase().includes(searchPeminjam) ||
                        peminjam.alamat.toLowerCase().includes(searchPeminjam);
                })
                .map((peminjam, i) => (
                  <div
                    key={i + 1}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handlePeminjam(peminjam)}
                  >
                    <p className="font-semibold text-gray-700">
                      {peminjam.nama} -
                      <span className="font-normal text-xs text-gray-600 ml-1">
                        {peminjam.status}
                      </span>
                    </p>
                    <p className="text-xs text-gray-600">
                      {peminjam.kelas} - {peminjam.angkatan}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="p-4 w-full bg-white dark:bg-gray-900 rounded-xl">
          <div className="grid gap-4 sm:grid-cols-4 sm:gap-6">
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
                value={peminjam.nama}
                required
                disabled
              />
            </div>
            <div className="w-full">
              <label
                for="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={peminjam.status}
                disabled
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
                value={peminjam.kelas}
                disabled
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
                value={peminjam.angkatan}
                disabled
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
                value={peminjam.noHp}
                disabled
                min={0}
              />
            </div>
            <div className="w-full lg:col-span-3">
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
                value={peminjam.alamat}
                disabled
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 col-span-2">
        <div className="lg:flex justify-between mb-3 items-center">
          <h2 className="text-xl font-bold text-gray-700 dark:text-white">
            Detail Buku
          </h2>
          {/* Search Bar */}
          <div className="relative mt-5 lg:mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MdSearch
                className="text-gray-500 dark:text-gray-400"
                size={20}
              />
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cari Buku"
              value={searchBuku}
              onChange={(e) => setSearchBuku(e.target.value)}
            />

            {/* Search result dropdown */}
            <div
              className={`bg-white w-full absolute mt-1 rounded-xl z-50 max-h-52 overflow-y-scroll ${
                searchBuku !== "" ? "visible" : "hidden"
              }`}
            >
              {dataBuku
                .filter((b) => {
                  return searchBuku.toLowerCase() === ""
                    ? b
                    : b.judul.toLowerCase().includes(searchBuku) ||
                        b.pengarang.toLowerCase().includes(searchBuku) ||
                        b.penerbit.toLowerCase().includes(searchBuku) ||
                        b.tahunTerbit.toString().includes(searchBuku) ||
                        b.isbn.toLowerCase().includes(searchBuku);
                })

                .map((b, i) => (
                  <div
                    key={i + 1}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleBuku(b)}
                  >
                    <p className="font-semibold text-gray-700">
                      {b.judul} -
                      <span className="font-normal text-xs text-gray-600 ml-1">
                        {b.pengarang}
                      </span>
                    </p>
                    <p className="text-xs text-gray-600">
                      {b.penerbit} - {b.tahunTerbit}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{b.isbn}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-x-auto rounded-xl">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-white  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 w-10">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Judul
                </th>
                <th scope="col" className="px-6 py-3">
                  Pengarang
                </th>
                <th scope="col" className="px-6 py-3">
                  Penerbit
                </th>
                <th scope="col" className="px-6 py-3">
                  Tahun Terbit
                </th>
                <th scope="col" className="px-6 py-3">
                  ISBN
                </th>
                <th scope="col" className="px-6 py-3">
                  Opsi
                </th>
              </tr>
            </thead>
            <tbody>
              {buku.map((b, i) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={i + 1}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">{b.judul}</td>
                  <td className="px-6 py-4">{b.pengarang}</td>
                  <td className="px-6 py-4">{b.penerbit}</td>
                  <td className="px-6 py-4">{b.tahunTerbit}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{b.isbn}</td>
                  <td className="px-6 py-4">
                    <button type="button" onClick={() => deleteBuku(b)}>
                      <MdDelete
                        size={18}
                        className="fill-red-400 hover:fill-red-500 mr-2"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-5">
        <button
          type="submit"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-400 focus:outline-none dark:focus:ring-yellow-800"
        >
          Ubah Peminjaman
        </button>

        <Link
          href="/peminjaman"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Batal
        </Link>
      </div>
    </form>
  );
};

export default EditForm;

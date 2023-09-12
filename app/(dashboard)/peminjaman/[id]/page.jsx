import { getDataById } from "@/libs/functions";
import Link from "next/link";
import SelesaiButton from "../components/SelesaiButton";

const TambahForm = async ({ params }) => {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = `${hostUrl}/api/peminjaman`;

  const id = params.id;
  const { peminjaman } = await getDataById(apiUrl, id);

  const peminjam = peminjaman.peminjam || {};
  const buku = peminjaman.buku || [];
  const pustakawan = peminjaman.pustakawan || {};
  const tanggalPengembalian = peminjaman.tanggalPengembalian || null;

  return (
    <main>
      <section className="mb-7">
        <h1 className="text-xl mb-3 font-bold text-gray-700 dark:text-white">
          Detail Peminjaman
        </h1>
        <div className="p-4 w-full bg-white dark:bg-gray-900 rounded-xl text-sm text-gray-700 grid gap-5 lg:gap-0 lg:grid-flow-col">
          <div className="flex justify-between lg:block">
            <p className="font-medium">Tanggal Peminjaman</p>
            <p className="text-gray-500">
              {new Date(peminjaman.createdAt).toLocaleDateString("id-ID")}
            </p>
          </div>
          <div className="flex justify-between lg:block">
            <p className="font-medium">Jumlah Buku</p>
            <p className="text-gray-500">{buku.length}</p>
          </div>
          <div className="flex justify-between lg:block">
            <p className="font-medium">Pustakawan</p>
            <p className="text-gray-500">
              {pustakawan.nama}- {pustakawan.jabatan}
            </p>
          </div>
          <div className="flex justify-between lg:block">
            <p className="font-medium">Tanggal Pengembalian</p>
            <p className="text-gray-500">
              {tanggalPengembalian !== null
                ? new Date(tanggalPengembalian).toLocaleDateString("id-ID")
                : "-"}
            </p>
          </div>
          <div className="flex justify-between lg:block">
            <p className="font-medium mb-1">Status Peminjaman</p>

            {peminjaman.status === "Sudah dikembalikan" ? (
              <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                {peminjaman.status}
              </span>
            ) : (
              <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                {peminjaman.status}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="w-full mb-7">
        <div className="lg:flex justify-between mb-3 items-center">
          <h2 className="text-md font-bold text-gray-700 dark:text-white">
            Peminjam
          </h2>
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
          <h2 className="text-md font-bold text-gray-700 dark:text-white">
            Detail Buku
          </h2>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-5">
        {peminjaman.status === "Belum dikembalikan" ? (
          <SelesaiButton apiUrl={`${apiUrl}/${peminjaman._id}`} />
        ) : null}

        <Link
          href="/peminjaman"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Kembali
        </Link>
      </div>
    </main>
  );
};

export default TambahForm;

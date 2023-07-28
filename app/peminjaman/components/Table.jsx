"use client";
import Link from "next/link";
import { MdEdit, MdRemoveRedEye } from "react-icons/md";
import AddButton from "../../../components/AddButton";
import DeleteButton from "../../../components/DeleteButton";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

const Table = (props) => {
  const data = props.data || [];
  const [search, setSearch] = useState("");

  return (
    <>
      <div className=" bg-white dark:bg-gray-900 mb-5 p-3 rounded-xl flex justify-between items-center">
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MdSearch className="text-gray-500 dark:text-gray-400" size={20} />
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <AddButton href="/peminjaman/tambah" model="Peminjaman" />
      </div>
      <div className="relative overflow-x-auto rounded-xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-white  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-10">
                No
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Tgl Peminjaman
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Nama Peminjam
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Jumlah Buku
              </th>
              <th scope="col" className="px-6 py-3">
                Pustakawan
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Opsi
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((peminjaman) => {
                return search.toLocaleLowerCase() === ""
                  ? peminjaman
                  : new Date(peminjaman.createdAt)
                      .toLocaleDateString("id-ID")
                      .includes(search) ||
                      peminjaman.peminjam.nama.toLowerCase().includes(search) ||
                      peminjaman.pustakawan.nama.toLowerCase().includes(search);
              })
              .map((peminjaman, i) => {
                const date = new Date(peminjaman.createdAt);

                return (
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
                    <td className="px-6 py-4">
                      {date.toLocaleDateString("id-ID")}
                    </td>

                    <td className="px-6 py-4">{peminjaman.peminjam.nama}</td>
                    <td className="px-6 py-4">{peminjaman.buku.length}</td>
                    <td className="px-6 py-4">
                      {peminjaman.pustakawan.nama} -{" "}
                      {peminjaman.pustakawan.jabatan}
                    </td>
                    <td className="px-6 py-4">
                      {peminjaman.status === "Sudah dikembalikan" ? (
                        <span class="bg-green-100 whitespace-nowrap text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                          {peminjaman.status}
                        </span>
                      ) : (
                        <span class="bg-yellow-100 whitespace-nowrap text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                          {peminjaman.status}
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-cente">
                        {peminjaman.status === "Belum dikembalikan" ? (
                          <>
                            <DeleteButton
                              url={`${props.apiUrl}?id=${peminjaman._id}`}
                            />
                            <Link href={`/peminjaman/edit/${peminjaman._id}`}>
                              <MdEdit
                                size={18}
                                className="fill-yellow-400 hover:fill-yellow-500 mr-2"
                              />
                            </Link>
                          </>
                        ) : null}

                        <Link href={`/peminjaman/${peminjaman._id}`}>
                          <MdRemoveRedEye
                            size={18}
                            className="fill-blue-400 hover:fill-blue-500"
                          />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

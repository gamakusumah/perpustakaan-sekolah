"use client";
import Link from "next/link";
import { MdEdit } from "react-icons/md";
import AddButton from "../../../components/AddButton";
import DeleteButton from "../../../components/DeleteButton";
import { useState } from "react";
import { MdSearch } from "react-icons/md";

const BukuTable = (props) => {
  const data = props.data;
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
        <AddButton href="/buku/tambah" />
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
            {data
              .filter((buku) => {
                return search.toLocaleLowerCase() === ""
                  ? buku
                  : buku.judul.toLowerCase().includes(search) ||
                      buku.pengarang.toLowerCase().includes(search) ||
                      buku.penerbit.toLowerCase().includes(search) ||
                      buku.tahunTerbit.toString().includes(search) ||
                      buku.isbn.toLowerCase().includes(search);
              })
              .map((buku, i) => (
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
                  <td className="px-6 py-4">{buku.judul}</td>
                  <td className="px-6 py-4">{buku.pengarang}</td>
                  <td className="px-6 py-4">{buku.penerbit}</td>
                  <td className="px-6 py-4">{buku.tahunTerbit}</td>
                  <td className="px-6 py-4">{buku.isbn}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-cente">
                      <DeleteButton url={`${props.apiUrl}?id=${buku._id}`} />
                      <Link href={`/buku/edit/${buku._id}`}>
                        <MdEdit
                          size={18}
                          className="fill-yellow-400 hover:fill-yellow-500"
                        />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BukuTable;

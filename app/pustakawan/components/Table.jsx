"use client";
import Link from "next/link";
import { MdEdit } from "react-icons/md";
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
        <AddButton href="/pustakawan/tambah" model="pustakawan" />
      </div>
      <div className="relative overflow-x-auto rounded-xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-white  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-10">
                No
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Nama Pustakawan
              </th>
              <th scope="col" className="px-6 py-3">
                Jabatan
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                No Handphone
              </th>
              <th scope="col" className="px-6 py-3">
                Alamat
              </th>
              <th scope="col" className="px-6 py-3">
                Opsi
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((pustakawan) => {
                return search.toLocaleLowerCase() === ""
                  ? pustakawan
                  : pustakawan.nama.toLowerCase().includes(search) ||
                      pustakawan.jabatan.toLowerCase().includes(search) ||
                      pustakawan.noHp.toLowerCase().includes(search) ||
                      pustakawan.alamat.toString().includes(search);
              })
              .map((pustakawan, i) => (
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
                  <td className="px-6 py-4">{pustakawan.nama}</td>
                  <td className="px-6 py-4">{pustakawan.jabatan}</td>
                  <td className="px-6 py-4">{pustakawan.noHp}</td>
                  <td className="px-6 py-4">
                    <p className="truncate w-96 hover:whitespace-normal">
                      {pustakawan.alamat}
                    </p>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-cente">
                      <DeleteButton
                        url={`${props.apiUrl}?id=${pustakawan._id}`}
                      />
                      <Link href={`/pustakawan/edit/${pustakawan._id}`}>
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

export default Table;

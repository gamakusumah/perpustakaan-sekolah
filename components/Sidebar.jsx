import Link from "next/link";
import Navbar from "./Navbar";
import { BiSolidBookAlt, BiLibrary } from "react-icons/bi";
import { IoIosListBox } from "react-icons/io";
import { IoLibrarySharp, IoPeople } from "react-icons/io5";
import { RiAdminFill } from "react-icons/ri";

const Sidebar = ({ children }) => {
  return (
    <>
      <Navbar />
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/buku"
                className="flex items-center p-2 text-gray-700 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoLibrarySharp
                  size={20}
                  className="flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ml-3 whitespace-nowrap">Buku</span>
              </Link>
            </li>
            <li>
              <Link
                href="/peminjam"
                className="flex items-center p-2 text-gray-700 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoPeople
                  size={20}
                  className="flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ml-3 whitespace-nowrap">Peminjam</span>
              </Link>
            </li>
            <li>
              <Link
                href="/pustakawan"
                className="flex items-center p-2 text-gray-700 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <RiAdminFill
                  size={20}
                  className="flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Pustakawan
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/peminjaman"
                className="flex items-center p-2 text-gray-700 hover:text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoIosListBox
                  size={20}
                  className="flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 hover:text-gray-900 dark:group-hover:text-white"
                />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Peminjaman
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="p-4 sm:ml-64 bg-gray-50 w-full mt-14">{children}</main>
    </>
  );
};

export default Sidebar;

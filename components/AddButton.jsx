import { MdAdd } from "react-icons/md";
import Link from "next/link";

const AddButton = (props) => {
  return (
    <Link
      href={`${props.href}`}
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium p-3 lg:rounded-xl rounded-full text-sm lg:px-5 lg:py-2.5 text-center inline-flex fixed bottom-5 right-5 items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <MdAdd size={20} className="lg:mr-2 w-7 h-7 lg:w-5 lg:h-5" />
      <span className="hidden lg: visible">Tambah {props.model}</span>
    </Link>
  );
};

export default AddButton;

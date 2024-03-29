"use client";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

const DeleteButton = (props) => {
  const router = useRouter();

  const deleteData = async () => {
    const confirmed = confirm("Hapus data?");
    if (confirmed) {
      const res = await fetch(`${props.url}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button type="button" onClick={() => deleteData()}>
      <MdDelete size={18} className="fill-red-400 hover:fill-red-500 mr-2" />
    </button>
  );
};

export default DeleteButton;

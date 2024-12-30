import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { addSticker } from "@/api/subtasks";

const CreateSticker = () => {
  const [openStickerForm, setOpenStickerForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const addTask = async () => {
    await addSticker(formData);
  };
  return (
    <div className="flex flex-col relative rounded-xl shadow-xl p-6 bg-green-300 w-full max-w-80 h-[21rem]">
      <div
        className={`flex flex-col transition-opacity duration-1000 h-full ${
          !openStickerForm ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        <div className="flex justify-between">
          <h1 className="font-semibold text-3xl">Social Media</h1>
          <IoClose
            className="cursor-pointer"
            size={25}
            onClick={() => setOpenStickerForm(!openStickerForm)}
          />
        </div>
        <div className="flex flex-col gap-4 mt-4 h-full">
          <input
            type="text"
            className="bg-green-300 placeholder-black text-black border-opacity-25 placeholder-opacity-50 outline-none p-2 border border-black rounded-lg h-10 w-full"
            placeholder="Title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <input
            type="text"
            className="bg-green-300 placeholder-black text-black border-opacity-25 placeholder-opacity-50 outline-none p-2 border rounded-lg border-black h-full max-h-36 w-full"
            placeholder="Description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <button
          onClick={addTask}
          className="ml-auto mt-2 py-1 border border-black border-opacity-25 px-4 rounded-lg font-semibold"
        >
          Create
        </button>
      </div>
      <FiPlus
        size={80}
        className={`absolute cursor-pointer transition-opacity duration-500 ${
          openStickerForm ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={() => setOpenStickerForm(true)}
      />
    </div>
  );
};

export default CreateSticker;

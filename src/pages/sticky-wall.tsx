import CreateSticker from "@/components/stickywall/CreateSticker";
import { SetTitleProps } from "@/helpers/interfaces";
import { useEffect, useState } from "react";
import { Tables } from "../../db/database.types";
import { getAllStickers } from "@/api/stickers";

type Sticker = Tables<"stickers">;

const StickyWall = ({ setTitle }: SetTitleProps) => {
  const [stickers, setStickers] = useState<Sticker[] | null>([]);

  async function fetch() {
    try {
      const stickers = await getAllStickers();

      setStickers(stickers);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setTitle("Sticky Wall");
    fetch();
  }, [setTitle]);
  return (
    <div className="flex gap-6 flex-wrap">
      {stickers != null &&
        stickers!.map((sticker) => (
          <div
            className="flex flex-col rounded-xl shadow-xl p-6 bg-green-300 w-full max-w-80 h-[21rem]"
            key={sticker.id}
          >
            <h1 className="font-semibold text-3xl">{sticker.title}</h1>
            <p className="mt-4">{sticker.description}</p>
          </div>
        ))}
      <CreateSticker />
    </div>
  );
};

export default StickyWall;

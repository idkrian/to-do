import supabase from "../../../db/supabase";
type taskRequest = {
  title: string;
  description: string;
};

export const getAllStickers = async () => {
  const { data: stickers } = await supabase.from("stickers").select("*");

  return stickers;
};

export const addSticker = async (data: taskRequest) => {
  await supabase.from("stickers").insert(data);
};

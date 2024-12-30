import supabase from "../../../db/supabase";

export const getAllLists = async () => {
  const { data: lists } = await supabase.from("lists").select("*");

  return lists;
};
export const getListById = async (id: string | string[]) => {
  const { data: list } = await supabase.from("lists").select("*").eq("id", id);

  return list;
};

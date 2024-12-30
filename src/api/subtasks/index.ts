import supabase from "../../../db/supabase";

export const getAllSubtasksById = async () => {
  const { data: lists } = await supabase.from("lists").select("*");

  return lists;
};

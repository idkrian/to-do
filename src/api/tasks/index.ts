import supabase from "../../../db/supabase";

export const getAllTasks = async () => {
  const { data: tasks } = await supabase.from("tasks").select();

  return tasks;
};

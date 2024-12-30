import supabase from "../../../db/supabase";

export const getTaskListByListId = async (listId: string | string[]) => {
  const { data: taskLists } = await supabase
    .from("task_lists")
    .select("tasks(*), lists(name)")
    .eq("list_id", listId);
  return taskLists;
};

export const getAllTasksWithList = async () => {
  const { data: tasks } = await supabase
    .from("task_lists")
    .select("tasks(*), lists(id,name)");

  const tasksResult = tasks!
    .map((taskList) => ({
      ...taskList.tasks,
      list: { name: taskList.lists?.name, id: taskList.lists?.id },
    }))
    .flat();
  return tasksResult;
};

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Tables } from "../../../db/database.types";
import supabase from "../../../db/supabase";
import TaskInput from "@/components/generics/TaskInput";
import { SetTitleProps } from "@/helpers/interfaces";

type Task = Tables<"tasks">;

const List = ({ setTitle }: SetTitleProps) => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetch() {
      const listId = router.query.id!;
      const { data: taskLists } = await supabase
        .from("task_lists")
        .select("tasks(*), lists(name)")
        .eq("list_id", listId);

      const tasksResult = {
        listName: taskLists![0].lists!.name,
        tasks: taskLists!.map((taskList) => taskList.tasks),
      };
      setTitle(tasksResult.listName);
      setTasks(tasksResult.tasks?.filter((task) => task !== null) as Task[]);
    }
    if (router.query.id) {
      fetch();
    }
  }, [router.query.id]);

  return (
    <div>
      {tasks != null &&
        tasks!.map((task: Task) => (
          <TaskInput name={task.name} size="md" key={task.id} />
        ))}
    </div>
  );
};
export default List;

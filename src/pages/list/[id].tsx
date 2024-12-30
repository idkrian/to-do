import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Tables } from "../../../db/database.types";
import TaskInput from "@/components/generics/TaskInput";
import { SetTitleProps } from "@/helpers/interfaces";
import { getListById } from "@/api/lists";
import { getTaskListByListId } from "@/api/task_lists";

type Task = Tables<"tasks">;

const List = ({ setTitle }: SetTitleProps) => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetch() {
      const listId = router.query.id!;
      const taskLists = await getTaskListByListId(listId);
      const list = await getListById(listId);

      setTitle(list![0].name);
      setTasks(
        taskLists!
          .filter((taskList) => taskList.tasks !== null)
          .map((taskList) => taskList.tasks)
          .filter((task) => task !== null) as Task[]
      );
    }
    if (router.query.id) {
      fetch();
    }
  }, [router.query.id, setTitle]);

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task: Task) => (
          <TaskInput task={task} size="md" key={task.id} />
        ))
      ) : (
        <div>You dont have any task in this list</div>
      )}
    </div>
  );
};
export default List;

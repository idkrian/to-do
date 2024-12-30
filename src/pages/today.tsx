import AddTaskButton from "@/components/generics/AddTaskButton";
import TaskInput from "@/components/generics/TaskInput";
import { useEffect, useState } from "react";
import { Tables } from "../../db/database.types";
import { SetTitleProps } from "@/helpers/interfaces";
import { getAllTasksWithList } from "@/api/task_lists";

type Task = Tables<"tasks"> & {
  list: { name: string | undefined; id: number | undefined };
};

const Today = ({ setTitle }: SetTitleProps) => {
  const [tasks, setTasks] = useState<Task[] | null>([]);
  async function fetch() {
    try {
      const tasks = await getAllTasksWithList();

      setTasks(tasks.filter((task) => task !== null) as Task[]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setTitle("Today");
    fetch();
  }, [setTitle]);

  return (
    <div>
      <AddTaskButton />
      {tasks != null &&
        tasks!.map((task) => <TaskInput task={task} size="md" key={task.id} />)}
    </div>
  );
};

export default Today;

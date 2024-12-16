import AddTaskButton from "@/components/generics/AddTaskButton";
import TaskInput from "@/components/generics/TaskInput";
import { useEffect, useState } from "react";
import supabase from "../../db/supabase";
import { Tables } from "../../db/database.types";
import { SetTitleProps } from "@/helpers/interfaces";

type Task = Tables<"tasks">;

const Today = ({ setTitle }: SetTitleProps) => {
  const [tasks, setTasks] = useState<Task[] | null>([]);
  async function fetch() {
    const { data: tasks } = await supabase.from("tasks").select();
    setTasks(tasks);
  }
  useEffect(() => {
    setTitle("Today");
    fetch();
  }, [setTitle]);

  return (
    <div>
      <AddTaskButton />
      {tasks != null &&
        tasks!.map((task) => (
          <TaskInput name={task.name} size="md" key={task.id} />
        ))}
    </div>
  );
};

export default Today;

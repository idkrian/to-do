import { getAllTasks } from "@/api/tasks";
import AddTaskButton from "@/components/generics/AddTaskButton";
import TaskInput from "@/components/generics/TaskInput";
import { SetTitleProps } from "@/helpers/interfaces";
import { isThisWeek, isToday, isTomorrow, setHours } from "date-fns";
import { useEffect, useState } from "react";

type TaskType = {
  created_at: string;
  description: string | null;
  due_date: string | null;
  id: number;
  name: string;
  subtask: number | null;
};

const Upcoming = ({ setTitle }: SetTitleProps) => {
  const [tasks, setTasks] = useState<{
    today: TaskType[];
    tomorrow: TaskType[];
    thisWeek: TaskType[];
  }>({
    today: [],
    tomorrow: [],
    thisWeek: [],
  });
  async function fetch() {
    try {
      const tasks = await getAllTasks();
      const todayTasks = tasks!.filter((task) =>
        isToday(setHours(task.due_date!, 0))
      );
      setTasks((tasks) => ({ ...tasks, today: todayTasks }));
      const tomorrowTasks = tasks!.filter((task) =>
        isTomorrow(setHours(task.due_date!, 0))
      );
      setTasks((tasks) => ({ ...tasks, tomorrow: tomorrowTasks }));

      const thisWeekTasks = tasks!.filter((task) =>
        isThisWeek(setHours(task.due_date!, 0))
      );
      setTasks((tasks) => ({ ...tasks, thisWeek: thisWeekTasks }));

      console.log(tomorrowTasks);
      console.log(todayTasks);
      console.log(thisWeekTasks);

      // setTasks(tasks.filter((task) => task !== null) as Task[]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setTitle("Upcoming");
    fetch();
  }, [setTitle]);
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-4 border px-6 pt-4 rounded-lg h-full w-full">
        <h1 className="text-2xl font-semibold capitalize">Today</h1>
        <div className="flex flex-col">
          <AddTaskButton />
          {tasks.today.map((task) => (
            <TaskInput task={task} key={task.id} size="md" />
          ))}
        </div>
      </div>
      <div className="flex gap-4 h-full w-full">
        <div className="flex flex-col gap-4 border px-6 pt-4 rounded-lg w-full">
          <h1 className="text-2xl font-semibold capitalize">Tomorrow</h1>
          <div className="flex flex-col">
            <AddTaskButton />
            {tasks.tomorrow.map((task) => (
              <TaskInput task={task} key={task.id} size="md" />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border px-6 pt-4 rounded-lg w-full">
          <h1 className="text-2xl font-semibold capitalize">This Week</h1>
          <div className="flex flex-col">
            <AddTaskButton />
            {tasks.thisWeek.map((task) => (
              <TaskInput task={task} key={task.id} size="md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;

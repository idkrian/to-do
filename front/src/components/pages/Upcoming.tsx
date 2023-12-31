import { useEffect, useState } from "react";
import { addDays, format, isThisWeek } from "date-fns";
import TaskContainer from "../Atoms/TaskContainer";
import { getTasksbyId } from "../../helpers/api";
interface TaskProps {
  _id: string;
  title: string;
  description: string;
  done: boolean;
  date: Date;
  list: string;
}
const Upcoming = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const today = format(new Date(), "dd/MM/yyyy");
  const tomorrow = format(addDays(new Date(), 1), "dd/MM/yyyy");
  const todayTasks = tasks.filter(
    (e) => format(new Date(e.date), "dd/MM/yyyy") === today
  );
  const tomorrowTasks = tasks.filter(
    (e) => format(addDays(new Date(e.date), 1), "dd/MM/yyyy") === tomorrow
  );
  const thisWeekTasks = tasks.filter((e) => isThisWeek(new Date(e.date)));

  const getAllTasks = async () => {
    const userId = localStorage.getItem("userId");
    const tasksData = await getTasksbyId(userId!);
    setTasks(tasksData);
  };
  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div className="p-5 justify-between grow h-full">
      <div className="flex items-center">
        <h1 className="font-bold text-4xl mr-4">Upcoming</h1>
        <div className="border-2 px-3 rounded-md">
          <h1 className="font-bold text-3xl">{thisWeekTasks.length}</h1>
        </div>
      </div>
      <div className="pt-10">
        <TaskContainer title={"Today"} tasks={todayTasks} />

        <div className="flex w-full">
          <TaskContainer
            title={"Tomorrow"}
            tasks={tomorrowTasks}
            style={"w-1/2 mr-2"}
          />
          <TaskContainer
            title={"This Week"}
            tasks={thisWeekTasks}
            style={"w-1/2 ml-2"}
          />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;

import { useEffect, useState } from "react";
import axios from "axios";
import { addDays, format, isThisWeek } from "date-fns";
import TaskContainer from "./Atoms/TaskContainer";
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
    (e) => format(addDays(new Date(e.date), 1), "dd/MM/yyyy") === today
  );
  const tomorrowTasks = tasks.filter(
    (e) => format(addDays(new Date(e.date), 1), "dd/MM/yyyy") === tomorrow
  );
  const thisWeekTasks = tasks.filter((e) => isThisWeek(new Date(e.date)));

  const getAllTasks = async () => {
    await axios
      .get("http://localhost:5000/tasks")
      .then((res) => setTasks(res.data.allTasks));
  };
  useEffect(() => {
    getAllTasks();
  }, []);
  console.log(todayTasks);

  return (
    <div className="p-5 justify-between grow">
      <div>
        <h1 className="font-bold text-5xl">Upcoming</h1>

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

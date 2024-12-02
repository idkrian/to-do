import AddTaskButton from "@/components/generics/AddTaskButton";
import TaskInput from "@/components/generics/TaskInput";

const Upcoming = () => {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-4 border px-6 pt-4 rounded-lg h-full w-full">
        <h1 className="text-2xl font-semibold capitalize">Today</h1>
        <div className="flex flex-col">
          <AddTaskButton />
          <TaskInput name="Limpar a Casa" size="md" />
          <TaskInput name="Levar o Cachorro pra Passear" size="md" />
          <TaskInput name="Ir ao mercado" size="md" />
        </div>
      </div>
      <div className="flex gap-4 h-full w-full">
        <div className="flex flex-col gap-4 border px-6 pt-4 rounded-lg w-full">
          <h1 className="text-2xl font-semibold capitalize">Tomorrow</h1>
          <div className="flex flex-col">
            <AddTaskButton />
            <TaskInput name="Limpar a Casa" size="md" />
            <TaskInput name="Levar o Cachorro pra Passear" size="md" />
            <TaskInput name="Ir ao mercado" size="md" />
          </div>
        </div>
        <div className="flex flex-col gap-4 border px-6 pt-4 rounded-lg w-full">
          <h1 className="text-2xl font-semibold capitalize">This Week</h1>
          <div className="flex flex-col">
            <AddTaskButton />
            <TaskInput name="Limpar a Casa" size="md" />
            <TaskInput name="Levar o Cachorro pra Passear" size="md" />
            <TaskInput name="Ir ao mercado" size="md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;

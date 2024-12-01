import AddTaskButton from "@/components/generics/AddTaskButton";
import TaskInput from "@/components/generics/TaskInput";
const today = () => {
  return (
    <div>
      <AddTaskButton />
      <TaskInput name="Limpar a Casa" />
      <TaskInput name="Levar o Cachorro pra Passear" />
      <TaskInput name="Ir ao mercado" />
    </div>
  );
};

export default today;

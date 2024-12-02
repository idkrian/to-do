import AddTaskButton from "@/components/generics/AddTaskButton";
import TaskInput from "@/components/generics/TaskInput";

const Today = () => {
  return (
    <div>
      <AddTaskButton />
      <TaskInput name="Limpar a Casa" size="md" />
      <TaskInput name="Levar o Cachorro pra Passear" size="md" />
      <TaskInput name="Ir ao mercado" size="md" />
    </div>
  );
};

export default Today;

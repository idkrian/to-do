import { TaskProps } from "../../helpers/interfaces";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../lib/ui/alert-dialog";
import { toast } from "../../lib/ui/use-toast";

interface Props {
  handleDeleteTask: (id: string) => void;
  data: TaskProps;
}
const AlertModal = ({ data, handleDeleteTask }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="flex font-semibold align-middle items-center rounded-xl p-3 border-2 mt-8 mb-3 cursor-pointer">
          <p>Delete Task</p>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              handleDeleteTask(data._id!);
              toast({
                variant: "destructive",
                title: "The task was deleted!",
                description: `The task ${data.title} has been successfully deleted.`,
              });
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertModal;

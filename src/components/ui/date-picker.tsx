"use client";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tables } from "../../../db/database.types";

type Task = Tables<"tasks"> & {
  list?: { name: string | undefined; id: number | undefined };
};
type DatePickerProps = {
  date: Date | undefined;
  selectedTask: Task | null;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export function DatePicker({ date, setDate, selectedTask }: DatePickerProps) {
  // const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "font-normal bg-lightGrey",
            !date && "text-muted-foreground"
          )}
        >
          {date
            ? format(date, "dd/MM/yyyy")
            : selectedTask && selectedTask.due_date
            ? format(new Date(selectedTask.due_date), "dd/MM/yyyy")
            : format(new Date(), "dd/MM/yyyy")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { Tables } from "../../db/database.types";

type Task = Tables<"tasks"> & {
  list?: { name: string | undefined; id: number | undefined };
};

interface AppContextType {
  showTaskMenu: boolean;
  setShowTaskMenu: Dispatch<SetStateAction<boolean>>;
  selectedTask: Task | null;
  setSelectedTask: Dispatch<SetStateAction<Task | null>>;
}
const contextDefaultValues: AppContextType = {
  showTaskMenu: true,
  setShowTaskMenu: () => {},
  selectedTask: null,
  setSelectedTask: () => {},
};

export const AppContext = createContext<AppContextType>(contextDefaultValues);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [showTaskMenu, setShowTaskMenu] = useState(true);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  return (
    <AppContext.Provider
      value={{ showTaskMenu, setShowTaskMenu, selectedTask, setSelectedTask }}
    >
      {children}
    </AppContext.Provider>
  );
};

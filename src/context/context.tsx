import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface AppContextType {
  showTaskMenu: boolean;
  setShowTaskMenu: Dispatch<SetStateAction<boolean>>;
}
const contextDefaultValues: AppContextType = {
  showTaskMenu: false,
  setShowTaskMenu: () => {},
};

export const AppContext = createContext<AppContextType>(contextDefaultValues);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [showTaskMenu, setShowTaskMenu] = useState(false);
  return (
    <AppContext.Provider value={{ showTaskMenu, setShowTaskMenu }}>
      {children}
    </AppContext.Provider>
  );
};

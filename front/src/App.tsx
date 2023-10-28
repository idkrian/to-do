import ListTasks from "./components/pages/ListTasks";
import Menu from "./components/menus/Menu";
import Sidebar from "./components/menus/Sidebar";
import Today from "./components/pages/Today";
import Upcoming from "./components/pages/Upcoming";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./lib/ui/toaster";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Today />,
  },
  {
    path: "/upcoming",
    element: <Upcoming />,
  },
  {
    path: "/list/:listName",
    element: <ListTasks />,
  },
]);
function App() {
  return (
    <div className="bg-[#fafafa] align-middle justify-center rounded-xl flex h-5/6 w-3/4 mx-auto">
      <Menu />
      <RouterProvider router={router} />
      <Sidebar />
      <Toaster />
    </div>
  );
}

export default App;

import ListTracks from "./components/ListTracks";
import Menu from "./components/Menu";
import Sidebar from "./components/Sidebar";
import Today from "./components/Today";
import Upcoming from "./components/Upcoming";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    element: <ListTracks />,
  },
]);
function App() {
  return (
    <div className="bg-[#fafafa] align-middle justify-center rounded-xl flex h-5/6 w-3/4 mx-auto">
      <Menu />
      <RouterProvider router={router} />
      <Sidebar />
    </div>
  );
}

export default App;

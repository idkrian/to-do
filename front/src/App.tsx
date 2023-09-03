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
]);
function App() {
  return (
    <div className="bg-[#fafafa] m-5 align-middle justify-center rounded-xl flex">
      <Menu />
      <RouterProvider router={router} />
      <Sidebar />
    </div>
  );
}

export default App;

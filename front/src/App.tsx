import ListTasks from "./components/pages/ListTasks";
import Menu from "./components/menus/Menu";
import Sidebar from "./components/menus/Sidebar";
import Today from "./components/pages/Today";
import Upcoming from "./components/pages/Upcoming";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./lib/ui/toaster";
import Login from "./components/pages/Login";
import { useState } from "react";

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
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  const [logged, setLogged] = useState(false);
  const [routeCount, setRouteCount] = useState(0);
  console.log(routeCount);

  const LoginPages = () => {
    if (routeCount === 0) {
      return <Login setRouteCount={setRouteCount} setLogged={setLogged} />;
    } else {
      return (
        <>
          <Menu logged={logged} />
          <RouterProvider router={router} />
          <Sidebar />
          <Toaster />
        </>
      );
    }
  };

  return (
    <div className="bg-[#fafafa] align-middle justify-center rounded-xl flex h-[98%] w-[98%] mx-auto">
      {LoginPages()}
      {/* <Menu logged={logged} />
      <RouterProvider router={router} />
      <Sidebar />
      <Toaster /> */}
    </div>
  );
}

export default App;

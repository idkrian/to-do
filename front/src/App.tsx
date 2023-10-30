import ListTasks from "./components/pages/ListTasks";
import Menu from "./components/menus/Menu";
import Sidebar from "./components/menus/Sidebar";
import Today from "./components/pages/Today";
import Upcoming from "./components/pages/Upcoming";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "./lib/ui/toaster";
import Login from "./components/pages/Login";
import { useState } from "react";

function App() {
  const isLoginPage = window.location.pathname === "/";

  const router = createBrowserRouter([
    {
      path: "/today",
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
      path: "/",
      element: <Login />,
      index: true,
    },
  ]);
  return (
    <div className="bg-[#fafafa] align-middle justify-center rounded-xl flex h-full w-full mx-auto">
      <Menu />
      <RouterProvider router={router} />
      <Sidebar />
      <Toaster />
    </div>
  );
}

export default App;

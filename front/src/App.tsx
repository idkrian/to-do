import ListTasks from "./components/pages/ListTasks";
import Menu from "./components/menus/Menu";
import Sidebar from "./components/menus/Sidebar";
import Today from "./components/pages/Today";
import Upcoming from "./components/pages/Upcoming";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Toaster } from "./lib/ui/toaster";
import Login from "./components/pages/Login";

function App() {
  const SidebarLayout = () => (
    <>
      <Menu />
      <Outlet />
    </>
  );
  return (
    <div className="bg-[#fafafa] align-middle justify-center rounded-xl flex h-full w-full mx-auto">
      <BrowserRouter>
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/today" element={<Today />} />
            <Route path="/list/:listName" element={<ListTasks />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Route>
          <Route index element={<Login />} />
        </Routes>
        <Toaster />
        <Sidebar />
      </BrowserRouter>
      {/* <Menu />
      <RouterProvider router={router} />
      <Sidebar />
      <Toaster /> */}
    </div>
  );
}

export default App;

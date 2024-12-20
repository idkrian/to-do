import type { AppProps } from "next/app";
import "@/app/globals.css";
import Sidebar from "@/components/Sidebar";
import PageLayout from "@/components/PageLayout";
import TaskMenu from "@/components/TaskMenu";
import { AppProvider } from "@/context/context";
import { useState } from "react";
// import { Poppins } from "next/font/google";
// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
// });
export default function App({ Component, pageProps }: AppProps) {
  const [title, setTitle] = useState("");

  return (
    // <div className={`h-full w-full p-6 bg-[#ededed] ${poppins.className}`}>
    <AppProvider>
      <div className={`h-full w-full p-6 bg-[#ededed]`}>
        <div className="flex h-full w-full p-4 bg-snowWhite rounded-2xl">
          <Sidebar />
          <PageLayout title={title}>
            <Component {...pageProps} setTitle={setTitle} />
          </PageLayout>
          <TaskMenu />
        </div>
      </div>
    </AppProvider>
  );
}

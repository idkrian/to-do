import type { AppProps } from "next/app";
import "@/app/globals.css";
import Sidebar from "@/components/Sidebar";
import PageLayout from "@/components/PageLayout";
import { useRouter } from "next/router";
// import { Poppins } from "next/font/google";
// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   display: "swap",
// });
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router);
  const pageTitle = router.pathname.replace(/^\//, "");

  return (
    // <div className={`h-full w-full p-6 bg-[#ededed] ${poppins.className}`}>

    <div className={`h-full w-full p-6 bg-[#ededed]`}>
      <div className="flex h-full w-full p-4 bg-snowWhite rounded-2xl">
        <Sidebar />
        <PageLayout title={pageTitle}>
          <Component {...pageProps} />
        </PageLayout>
      </div>
    </div>
  );
}

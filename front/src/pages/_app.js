import "@/styles/globals.css";
import Menu from "@/pages/Menu";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#2c2c2e] p-5">
      <div className="container bg-[#fafafa] mx-auto grid grid-cols-3 gap-2 rounded-xl">
        <Menu />
        <Component {...pageProps} className="col-span-2" />
      </div>
    </div>
  );
}

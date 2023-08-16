import Menu from "@/components/Menu";
import Description from "@/components/Description";

export default function Home() {
  return (
    <main className="xl:container bg-red-600 mx-auto grid grid-cols-3 gap-2 ">
      <Menu />
      <Description />
    </main>
  );
}

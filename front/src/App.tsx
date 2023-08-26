import Menu from "./components/Menu";
import Today from "./components/Today";

function App() {
  return (
    <div className="bg-[#fafafa] m-5 align-middle justify-center rounded-lg grid grid-cols-3 gap-4">
      <Menu />
      <Today />
    </div>
  );
}

export default App;

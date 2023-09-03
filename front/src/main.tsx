import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="bg-[#2b2c2f] h-screen p-8 flex flex-col justify-center">
    <App />
  </div>
);

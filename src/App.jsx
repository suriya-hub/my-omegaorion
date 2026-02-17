import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import People from "./components/People";
import Timesheet from "./components/Timesheet";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState("Home");

  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        active={active}
        setActive={setActive}
      />
      <div className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/teammanagement/timesheet" element={<Timesheet />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

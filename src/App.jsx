import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import People from "./components/People";
import PersonalDetails from "./components/PersonalDetails";
import Projects from "./components/Projects";
import Hiring from "./components/Hiring";
import Addemployee from "./components/Addemployee";
import Reimbursement from "./components/Reimbursement";
import Employeelist from "./components/Employeelist";
import Report from "./components/Report";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myinfo/personaldatails" element={<PersonalDetails />} />
          <Route path="/people" element={<People />} />
          <Route path="/teammanagement/addemployee" element={<Addemployee />} />
          <Route path="/teammanagement/employeelist" element={<Employeelist />} />
          <Route path="/reimbursement/reimbursementlist" element={<Reimbursement />} />
          <Route path="/projectsetup/projects" element={<Projects />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<Home />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;

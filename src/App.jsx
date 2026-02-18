import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import People from "./components/People";
import PersonalDetails from "./components/PersonalDetails";
import Projects from "./components/Projects";
import Hiring from "./components/Hiring";
import Reimbursement from "./components/Reimbursement";
import Employeelist from "./components/Employeelist";
import Report from "./components/Report";
import Header from "./components/Header";
import Timesheet from "./components/Timesheet";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#F7F7F7] overflow-hidden">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 overflow-y-auto lg:m-6 mx-0 mr-0 lg:mr-6">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/myinfo/personaldetails" element={<PersonalDetails />} />
          <Route path="/people" element={<People />} />
          <Route path="/teammanagement/timesheet" element={<Timesheet />} />
          <Route path="/teammanagement/employeelist" element={<Employeelist />} />
          <Route path="/teammanagement/reimbursementlist" element={<Reimbursement />} />
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

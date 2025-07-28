import "./App.css";
import Layout from "./Components/Layout";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";
import Recruiter from "./Pages/Recruiter";
import Interviews from "./Pages/Interviews";
import Assignment from "./Pages/Assignment";
import CandidateDetails from "./Pages/CandidateDetails";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/recruit" element={<Recruiter />} />
        <Route path="/interview" element={<Interviews />} />
        <Route path="/assign" element={<Assignment />} />
        <Route path="/candidate/:candidateId" element={<CandidateDetails />} />
      </Routes>
    </>
  );
}

export default App;

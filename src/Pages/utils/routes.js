import { Route,Routes, } from "react-router-dom";
import DynamicTable from "../DynamicTable";
import ApplicationForm from "../ApplicantForm";
import Applicantpdf from "../Applicantpdf"
import ApplicationsReview from "../ApplicationsReview";
<<<<<<< HEAD
import Dashboard from "../Dashboard";
import main from "../main";
=======
import Login from "../Login";
>>>>>>> 684381817d4a5d02befe980d2b51853d69c183b0
function Expenses() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>
      </main>
    );
  }

export function Routers(params) {
    return (<Routes>
        <Route path="/" className="nav_link" element={<Dashboard />} />
        <Route path="/expenses" className="nav_link" element={<Expenses />} />
        <Route path="/Dashboard" className="nav_link" element={<Dashboard />} />
        <Route path="/DynamicTable" className="nav_link" element={<DynamicTable />} />
        <Route path="/ApplicationForm" className="nav_link" element={<ApplicationForm />} />
        <Route path="/Applicantpdf/:id" className="nav_link" element={<Applicantpdf />} />
        <Route path="/ApplicationsReview" className="nav_link" element={<ApplicationsReview />} />
        <Route path="/Login" className="nav_link" element={<Login />} />
    </Routes>)
}
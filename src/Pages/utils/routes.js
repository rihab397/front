import { Route,Routes, } from "react-router-dom";
import DynamicTable from "../DynamicTable";
import ApplicationForm from "../ApplicantForm";
import Applicantpdf from "../Applicantpdf"
function Expenses() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>
      </main>
    );
  }
  function Invoices() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Invoices</h2>
      </main>
    );
  }
export function Routers(params) {
    return (<Routes>
        <Route path="/" className="nav_link" element={<main />} />
        <Route path="/expenses" className="nav_link" element={<Expenses />} />
        <Route path="/invoices" className="nav_link" element={<Invoices />} />
        <Route path="/DynamicTable" className="nav_link" element={<DynamicTable />} />
        <Route path="/ApplicationForm" className="nav_link" element={<ApplicationForm />} />
        <Route path="/Applicantpdf/:id" className="nav_link" element={<Applicantpdf />} />
    </Routes>)
}
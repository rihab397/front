import { Route,Routes, } from "react-router-dom";
import DynamicTable from "../DynamicTable";
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
    </Routes>)
}
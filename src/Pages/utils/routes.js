import { Route,Routes, } from "react-router-dom";
import DynamicTable from "../DynamicTable";
import ApplicationForm from "../ApplicantForm";
import Applicantpdf from "../Applicantpdf"
import ApplicationsReview from "../ApplicationsReview";
import Login from "../Login";
import Dashboard from "../Dashboard"
import UploadInvestor from "../UploadInvestorsData";
import InvestorViewPage from "../InvestorViewPage";
import ShowInvestorData from "../showInvestorData";


export function Routers(params) {
    return (<Routes>
        <Route path="/" className="nav_link" element={<Dashboard />} />
        <Route path="/Dashboard" className="nav_link" element={<Dashboard />} />
        <Route path="/DynamicTable" className="nav_link" element={<DynamicTable />} />
        <Route path="/ApplicationForm" className="nav_link" element={<ApplicationForm />} />
        <Route path="/Applicantpdf/:id" className="nav_link" element={<Applicantpdf />} />
        <Route path="/ApplicationsReview" className="nav_link" element={<ApplicationsReview />} />
        <Route path="/Login" className="nav_link" element={<Login />} />
        <Route path="/UploadInvestor" className="nav_link" element={<UploadInvestor />} />
        <Route path="/InvestorViewPage" className="nav_link" element={<InvestorViewPage />} />
        <Route path="/ShowInvestorData/:id" className="nav_link" element={<ShowInvestorData />} />
    </Routes>)
}
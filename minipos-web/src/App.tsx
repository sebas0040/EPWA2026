import { useState } from "react";
import "./App.css";
import DepartamentsPage from "./pages/DepartamentPage";
import CustomersPage from "./pages/CustomersPage"; //"./pages/CustomersPage";
import MainLayout from "./layouts/MainLayout";
import SidebarMenu from "./components/SidebarMenu";
import TestMenuOptionPage from "./pages/TestMenuOptionPage";
import AboutsPage from "./pages/AboutsPage";

function App() {
  const [page, setPage] = useState("customers");
  function renderContent() {
    switch (page) {
      case "customers":
        return <CustomersPage />;
      case "departments":
        return <DepartamentsPage />;
      case "tmo":
        return <TestMenuOptionPage />;
      case "aboutUs":
        return <AboutsPage />;
      default:
        return <CustomersPage />;
    }
  }
  return (
    <MainLayout
      sidebar={<SidebarMenu current={page} onChange={setPage} />}
      content={renderContent()}
    />
  );
}
export default App;

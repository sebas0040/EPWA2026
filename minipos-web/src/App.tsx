import { useEffect, useState } from "react";
import "./App.css";
import DepartamentsPage from "./pages/DepartamentPage";
import CustomersPage from "./pages/CustomersPage";
import MainLayout from "./layouts/MainLayout";
import SidebarMenu from "./components/SidebarMenu";
import TestMenuOptionPage from "./pages/TestMenuOptionPage";
import AboutsPage from "./pages/AboutsPage";
import { useMenuOptions } from "./hooks/useMenuOptions";

function App() {
  const role = "user"; // Cambia a "user" cuando quieras probar el menú de usuario.
  const { data: menuOptions = [], isLoading, error } = useMenuOptions(role);
  const [page, setPage] = useState("");

  useEffect(() => {
    if (!page && menuOptions.length > 0) {
      setPage(menuOptions[0].name);
    }
  }, [menuOptions, page]);

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
        return <div>Selecciona una opción del menú.</div>;
    }
  }

  return (
    <MainLayout
      sidebar={
        isLoading ? (
          <div>Loading menu...</div>
        ) : error ? (
          <div>Error cargando menú</div>
        ) : (
          <SidebarMenu current={page} onChange={setPage} menuOptions={menuOptions} />
        )
      }
      content={renderContent()}
    />
  );
}
export default App;

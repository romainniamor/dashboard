import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./pages/global/NavBar";
import SideBar from "./pages/global/SideBar";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Documentation from "./pages/documentation";
import BarChart from "./pages/charts/bar";
import PieChart from "./pages/charts/pie";
import LineChart from "./pages/charts/line";
import GeoChart from "./pages/charts/geo";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className="app">
            <SideBar />
            <main className="content">
              <NavBar />

              <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/bar-chart" element={<BarChart />} />
                <Route path="/pie-chart" element={<PieChart />} />
                <Route path="/line-chart" element={<LineChart />} />
                <Route path="/geo-chart" element={<GeoChart />} />
              </Routes>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

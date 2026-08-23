import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Overview from "./pages/Overview/Overview";
import Prediction from "./pages/Prediction/Prediction";
import Market from "./pages/Market/Market";
import Models from "./pages/Models/Models";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Default page */}
          <Route
            path="/"
            element={<Navigate to="/prediction" replace />}
          />

          {/* Pages */}
          <Route path="/overview" element={<Overview />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/market" element={<Market />} />
          <Route path="/models" element={<Models />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
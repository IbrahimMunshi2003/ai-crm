import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import AssistantPage from "./pages/AssistantPage";
import InteractionPage from "./pages/LogInteractionPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import FollowupPage from "./pages/FollowupPage";
import SettingsPage from "./pages/SettingsPage";

import "./styles/globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Navigate to="/assistant" />}
          />

          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/assistant"
            element={<AssistantPage />}
          />

          <Route
            path="/interactions"
            element={<InteractionPage />}
          />

          <Route
            path="/analytics"
            element={<AnalyticsPage />}
          />

          <Route
            path="/followups"
            element={<FollowupPage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}


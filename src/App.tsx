import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CalculatePage, TodoPage, DashboardPage } from "./pages";
import { NotFoundPage } from "./pages/NotFound";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calculate" element={<CalculatePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

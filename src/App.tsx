import { Routes, Route } from "react-router-dom";
import "./style.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home.tsx";
import ProjectsPage from "./pages/projects.tsx";
import UnderConstruction from "./pages/underConstruction.tsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky inset-0 w-full z-50">
        <Navbar />
      </header>
      <main className="z-0 flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<UnderConstruction />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

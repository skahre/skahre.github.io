import { Routes, Route } from "react-router-dom";
import "./style.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home.tsx";
import ProjectsPage from "./pages/projects.tsx";
import UnderConstruction from "./pages/underConstruction.tsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </>
  );
}

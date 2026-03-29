import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <HomePage />
    <Footer />
  </StrictMode>,
);

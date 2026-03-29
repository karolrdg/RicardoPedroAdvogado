import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes de Layout
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Trabalho from "./pages/Trabalho";
import Penal from "./pages/Penal";
import Civil from "./pages/Civil";

export default function App() {

  // SCRIPT DE PROTEÇÃO (Dissuasão para o "Inspecionar")
  useEffect(() => {
    // Bloqueia o clique direito
    const handleContextMenu = (e) => e.preventDefault();

    // Bloqueia teclas de atalho (F12, Ctrl+Shift+I, Ctrl+U, etc.)
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I ou J
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U (Exibir código fonte)
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Limpeza ao desmontar o componente
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Router>
      {/* Garante que a página sempre comece no topo ao trocar de rota */}
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trabalho" element={<Trabalho />} />
        <Route path="/penal" element={<Penal />} />
        <Route path="/civil" element={<Civil />} />
      </Routes>

      <Footer />
    </Router>
  );
}
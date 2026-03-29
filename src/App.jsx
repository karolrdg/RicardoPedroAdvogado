import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. Importe o componente que você criou
import ScrollToTop from "./components/ScrollToTop";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Trabalho from "./pages/Trabalho";
import Penal from "./pages/Penal";
import Civil from "./pages/Civil";

export default function App() {
  return (
    <Router>
      {/* 2. O ScrollToTop deve ser renderizado aqui para monitorar as rotas */}
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
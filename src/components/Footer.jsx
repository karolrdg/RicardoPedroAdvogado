import React from "react";
import { Link } from "react-router-dom";
// Mantendo o seu import original exatamente como solicitado
import logo from "../assets/logo.webp";

export default function Footer() {

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-primary text-white border-t border-white/5 font-light">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* COLUNA 1: LOGO E BIO */}
                    <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <img
                            src={logo}
                            alt="Ricardo Pedro Advocacia"
                            className="h-16 w-auto mb-6 object-contain"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Defesa estratégica e compromisso com a justiça em Porto Alegre e região metropolitana.
                        </p>
                    </div>

                    {/* COLUNA 2: ATUAÇÃO */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-secondary uppercase tracking-widest text-xs font-bold mb-6">Atuação</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/trabalho" className="hover:text-white transition-colors">Direito do Trabalho</Link></li>
                            <li><Link to="/penal" className="hover:text-white transition-colors">Direito Penal</Link></li>
                            <li><Link to="/civil" className="hover:text-white transition-colors">Direito Civil</Link></li>
                            <li><Link to="/previdenciario" className="hover:text-white transition-colors">Previdenciário</Link></li>
                        </ul>
                    </div>

                    {/* COLUNA 3: INSTITUCIONAL */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-secondary uppercase tracking-widest text-xs font-bold mb-6">Institucional</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <button
                                    onClick={scrollToTop}
                                    className="hover:text-white transition-colors"
                                >
                                    Início
                                </button>
                            </li>
                            <li><a href="/#sobre" className="hover:text-white transition-colors">Sobre o Escritório</a></li>
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send?phone=5551985128006"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    Fale Conosco
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* COLUNA 4: LEGAL */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-secondary uppercase tracking-widest text-xs font-bold mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
                            <li><Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
                        © 2026 RICARDO PEDRO ADVOCACIA. TODOS OS DIREITOS RESERVADOS.
                    </p>

                    <span className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">
                        OAB/RS 84.654
                    </span>
                </div>
            </div>
        </footer>
    );
}
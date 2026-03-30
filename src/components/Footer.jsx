import React from "react";
import { Link } from "react-router-dom";
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
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">

                    {/* COLUNA 1: LOGO E BIO */}
                    <div className="flex flex-col items-start text-left">
                        <img
                            src={logo}
                            alt="Ricardo Pedro Advocacia"
                            className="h-14 md:h-16 w-auto mb-6 object-contain"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Defesa estratégica e compromisso com a justiça em Porto Alegre e região metropolitana.
                        </p>
                    </div>

                    {/* COLUNA 2: ATUAÇÃO */}
                    <div className="flex flex-col items-start">
                        <h4 className="text-secondary uppercase tracking-widest text-[10px] md:text-xs font-bold mb-6">Atuação</h4>
                        <ul className="space-y-4 text-sm text-gray-400 w-full">
                            <li><Link to="/trabalho" className="hover:text-white transition-colors block py-1">Direito do Trabalho</Link></li>
                            <li><Link to="/penal" className="hover:text-white transition-colors block py-1">Direito Penal</Link></li>
                            <li><Link to="/civil" className="hover:text-white transition-colors block py-1">Direito Civil</Link></li>
                            <li><Link to="/previdenciario" className="hover:text-white transition-colors block py-1">Previdenciário</Link></li>
                        </ul>
                    </div>

                    {/* COLUNA 3: INSTITUCIONAL */}
                    <div className="flex flex-col items-start">
                        <h4 className="text-secondary uppercase tracking-widest text-[10px] md:text-xs font-bold mb-6">Institucional</h4>
                        <ul className="space-y-4 text-sm text-gray-400 w-full">
                            <li>
                                <button
                                    onClick={scrollToTop}
                                    className="hover:text-white transition-colors block py-1 text-left"
                                >
                                    Início
                                </button>
                            </li>
                            <li><a href="/#sobre" className="hover:text-white transition-colors block py-1">Sobre o Escritório</a></li>
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send?phone=5551985128006"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors block py-1"
                                >
                                    Fale Conosco
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* RODAPÉ FINAL: COPYRIGHT E OAB ATUALIZADA */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-1">
                        <p className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                            © 2026 RICARDO PEDRO ADVOCACIA.
                        </p>
                        <p className="text-gray-600 text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                            TODOS OS DIREITOS RESERVADOS.
                        </p>
                    </div>

                    <span className="text-gray-400 text-[10px] md:text-[11px] font-medium tracking-[0.15em] border border-white/10 px-3 py-1.5 rounded bg-white/[0.02]">
                        OAB/RS 84.654
                    </span>
                </div>
            </div>
        </footer>
    );
}
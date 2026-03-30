import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.webp";

export default function Header() {
    const location = useLocation();

    // Estados para controlar os menus no mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

    // Função para fechar o menu mobile ao clicar em um link
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsMobileDropdownOpen(false);
    };

    const renderLink = (to, label, isMobile = false) => {
        const baseClass = isMobile
            ? "block py-3 text-lg font-medium hover:text-secondary transition border-b border-gray-200/10 last:border-0"
            : "cursor-pointer hover:text-secondary transition";

        if (location.pathname === "/") {
            return (
                <ScrollLink
                    to={to}
                    smooth={true}
                    duration={500}
                    className={baseClass}
                    onClick={closeMenu}
                >
                    {label}
                </ScrollLink>
            );
        } else {
            return (
                <RouterLink
                    to={`/#${to}`}
                    className={baseClass}
                    onClick={closeMenu}
                >
                    {label}
                </RouterLink>
            );
        }
    };

    return (
        <header className="bg-primary text-foreground shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
                {/* LOGO */}
                <RouterLink to="/" onClick={closeMenu}>
                    <img src={logo} alt="Ricardo Pedro Advocacia" className="h-10 object-contain" />
                </RouterLink>

                {/* BOTÃO HAMBÚRGUER (MOBILE) */}
                <button
                    className="md:hidden text-foreground hover:text-secondary focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        /* Ícone de Fechar (X) */
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        /* Ícone de Hambúrguer */
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* MENU DESKTOP */}
                <nav className="hidden md:flex gap-6 items-center">
                    {renderLink("home", "Início")}

                    {/* DROPDOWN DESKTOP */}
                    <div className="relative group">
                        <span className="cursor-pointer hover:text-secondary transition py-2">
                            Áreas de Atuação ▼
                        </span>
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <RouterLink to="/trabalho" className="block px-4 py-2 text-primary hover:bg-secondary hover:text-foreground transition">
                                Direito do Trabalho
                            </RouterLink>
                            <RouterLink to="/penal" className="block px-4 py-2 text-primary hover:bg-secondary hover:text-foreground transition">
                                Direito Penal
                            </RouterLink>
                            <RouterLink to="/civil" className="block px-4 py-2 text-primary hover:bg-secondary hover:text-foreground transition">
                                Direito Civil
                            </RouterLink>
                            <RouterLink to="/previdenciario" className="block px-4 py-2 text-primary hover:bg-secondary hover:text-foreground transition">
                                Direito Previdenciário
                            </RouterLink>
                        </div>
                    </div>

                    {renderLink("sobre", "Sobre")}
                    {renderLink("contato", "Contato")}
                </nav>
            </div>

            {/* MENU MOBILE */}
            <div
                className={`md:hidden bg-primary absolute w-full left-0 top-full flex flex-col px-6 shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-[500px] py-4 border-t border-gray-200/20" : "max-h-0 py-0"
                    }`}
            >
                {renderLink("home", "Início", true)}

                {/* DROPDOWN MOBILE (Acordeão) */}
                <div className="border-b border-gray-200/10">
                    <button
                        className="w-full flex justify-between items-center text-left py-3 text-lg font-medium hover:text-secondary transition"
                        onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    >
                        <span>Áreas de Atuação</span>
                        <span className="text-sm">{isMobileDropdownOpen ? "▲" : "▼"}</span>
                    </button>

                    {/* Submenu Mobile */}
                    <div className={`flex flex-col pl-4 transition-all duration-300 overflow-hidden ${isMobileDropdownOpen ? "max-h-[200px] mb-3" : "max-h-0"
                        }`}>
                        <RouterLink to="/trabalho" className="block py-2 text-foreground/80 hover:text-secondary transition" onClick={closeMenu}>
                            Direito do Trabalho
                        </RouterLink>
                        <RouterLink to="/penal" className="block py-2 text-foreground/80 hover:text-secondary transition" onClick={closeMenu}>
                            Direito Penal
                        </RouterLink>
                        <RouterLink to="/civil" className="block py-2 text-foreground/80 hover:text-secondary transition" onClick={closeMenu}>
                            Direito Civil
                        </RouterLink>
                        <RouterLink to="/previdenciario" className="block py-2 text-foreground/80 hover:text-secondary transition" onClick={closeMenu}>
                            Direito Previdenciário
                        </RouterLink>
                    </div>
                </div>

                {renderLink("sobre", "Sobre", true)}
                {renderLink("contato", "Contato", true)}
            </div>
        </header>
    );
}
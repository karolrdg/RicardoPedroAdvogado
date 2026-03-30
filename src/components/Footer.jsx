import React from "react";
import { IoLogoWhatsapp, IoMailOutline, IoLocationOutline } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="bg-primary text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* COLUNA 1: LOGO E DESCRIÇÃO */}
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src="/logo.webp"
                            alt="Ricardo Pedro Advocacia"
                            className="h-20 w-auto mb-6 object-contain"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-center md:text-left font-light">
                            Advocacia especializada com foco em soluções estratégicas e defesa humanizada dos seus direitos.
                        </p>
                    </div>

                    {/* COLUNA 2: CONTATO RÁPIDO */}
                    <div className="flex flex-col items-center md:items-start font-light">
                        <h4 className="text-secondary uppercase tracking-widest text-xs font-bold mb-6">Contato</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://api.whatsapp.com/send?phone=5551985128006"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors text-sm"
                                >
                                    <IoLogoWhatsapp className="text-lg text-secondary" />
                                    (51) 98512-8006
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:ricardopedros@yahoo.com.br"
                                    className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors text-sm"
                                >
                                    <IoMailOutline className="text-lg text-secondary" />
                                    ricardopedros@yahoo.com.br
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* COLUNA 3: LOCALIZAÇÃO */}
                    <div className="flex flex-col items-center md:items-start font-light">
                        <h4 className="text-secondary uppercase tracking-widest text-xs font-bold mb-6">Endereço</h4>
                        <div className="flex items-start gap-3 text-gray-400 text-sm text-center md:text-left">
                            <IoLocationOutline className="text-xl text-secondary shrink-0" />
                            <p>Atendimento Presencial e Digital<br />Esteio / Rio Grande do Sul</p>
                        </div>
                    </div>

                </div>

                {/* LINHA DE COPYRIGHT */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em] text-center md:text-left">
                        © 2026 Ricardo Pedro Advocacia. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-8">
                    </div>
                </div>
            </div>
        </footer>
    );
}
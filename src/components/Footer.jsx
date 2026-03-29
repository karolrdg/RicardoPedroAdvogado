import React from "react";

export default function Footer() {
    return (
        <footer className="bg-primary text-foreground text-center py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm md:text-base">
                    © Ricardo Pedro Advocacia – Todos os direitos reservados.
                </p>
                <div className="flex gap-4">
                    <a
                        href="https://api.whatsapp.com/send?phone=5551985128006"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-whatsapp hover:bg-whatsapp-hover text-white px-4 py-2 rounded-md font-semibold transition-colors text-sm md:text-base"
                    >
                        WhatsApp
                    </a>
                    <a
                        href="mailto:ricardopedros@yahoo.com.br"
                        className="border border-foreground text-foreground px-4 py-2 rounded-md font-semibold hover:bg-foreground hover:text-primary transition-colors text-sm md:text-base"
                    >
                        E-mail
                    </a>
                </div>
            </div>
        </footer>
    );
}
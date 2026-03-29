import { useState, useEffect } from "react";

export default function Hero() {
    // A frase completa que será digitada
    const texto = "Protegendo seus direitos com Ética e Segurança Jurídica";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(texto.slice(0, i + 1));
            i++;

            if (i === texto.length) {
                clearInterval(interval);
            }
        }, 60); // Velocidade otimizada para frases longas

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative bg-primary text-foreground min-h-[65vh] flex flex-col items-center justify-center text-center px-6 py-32 overflow-hidden border-b border-white/5"
        >
            {/* GRAFIA DE LINHAS ABSTRATAS (Textura de fundo) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="gridLines" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.8" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridLines)" />
                </svg>
            </div>

            {/* PONTO DE LUZ CENTRAL (Radial Gradient) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(142,149,217,0.1)_0%,rgba(11,14,20,0)_75%)] pointer-events-none"></div>

            {/* CONTEÚDO PRINCIPAL */}
            <div className="relative z-10 flex flex-col items-center max-w-5xl">

                {/* TÍTULO COM DIGITAÇÃO COMPLETA */}
                <h1 className="text-4xl md:text-6xl font-black mb-10 leading-[1.2] tracking-tight min-h-[160px] md:min-h-[140px] flex items-center justify-center">
                    <span className="text-white">
                        {displayText}
                        <span className="inline-block ml-2 w-1 h-10 md:h-14 bg-secondary animate-pulse align-middle"></span>
                    </span>
                </h1>

                {/* DESCRIÇÃO - DESIGN CLEAN */}
                <p className="max-w-2xl text-foreground/70 text-lg md:text-xl mb-12 leading-relaxed font-light italic">
                    Atuação jurídica de excelência nas áreas{" "}
                    <span className="text-secondary font-medium not-italic">Trabalhista, Penal e Cível</span>.
                    Comprometimento total com a sua tranquilidade e justiça.
                </p>

                {/* BOTÃO DE CONVERSÃO */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <a
                        href="https://api.whatsapp.com/send?phone=5551985128006"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white px-10 py-5 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-whatsapp/20 hover:-translate-y-1 font-bold text-lg"
                    >
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.53.909 3.039 1.389 4.625 1.39 5.4 0 9.793-4.393 9.795-9.793 0-2.618-1.02-5.079-2.872-6.932-1.856-1.853-4.316-2.873-6.936-2.873-5.399 0-9.791 4.394-9.794 9.795 0 1.766.47 3.489 1.359 5.002l-.994 3.633 3.717-.974z" />
                        </svg>
                        Agendar Consultoria Especializada
                    </a>
                </div>
            </div>
        </section>
    );
}
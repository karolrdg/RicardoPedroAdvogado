import { useState, useEffect } from "react";
// 1. Importando o ícone de contorno do React Icons
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Civil() {
    const texto = "Direito Civil";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(texto.slice(0, i + 1));
            i++;
            if (i === texto.length) clearInterval(interval);
        }, 120);
        return () => clearInterval(interval);
    }, []);

    const demandas = [
        {
            titulo: "Direito de Família",
            desc: "Divórcios, guarda de filhos, pensão alimentícia e proteção patrimonial familiar com foco na mediação.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            titulo: "Indenizações",
            desc: "Assistência técnica para buscar compensações justas por danos morais, materiais e acidentes de qualquer natureza.",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            titulo: "Inventários",
            desc: "Inventários judiciais e extrajudiciais para organização e transferência patrimonial de forma segura e ágil.",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        },
        {
            titulo: "Contratos e Usucapião",
            desc: "Elaboração de contratos complexos e regularização de propriedades através de usucapião judicial ou extrajudicial.",
            icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        }
    ];

    return (
        <main className="bg-foreground text-primary min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-primary text-foreground py-28 px-6 text-center overflow-hidden border-b-4 border-secondary/20">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
                        Soluções Cíveis e Patrimoniais
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 min-h-[60px]">
                        <span className="text-white">
                            {displayText}
                            <span className="ml-1 text-secondary animate-pulse">|</span>
                        </span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed">
                        Protegemos seu patrimônio, família e negócios, garantindo soluções estratégicas para evitar conflitos e assegurar seus direitos.
                    </p>
                </div>
            </section>

            {/* Principais Serviços */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Principais Serviços</h2>
                    <div className="h-1 w-20 bg-secondary rounded-full"></div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {demandas.map((item, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-secondary/20 hover:border-secondary flex gap-6 items-start">
                            <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                </svg>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors text-primary">
                                    {item.titulo}
                                </h3>
                                <p className="text-primary/70 leading-relaxed text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action (CTA) */}
                <div className="mt-20 bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Precisa de consultoria jurídica especializada?</h3>
                        <p className="text-foreground/70 mb-10 max-w-xl mx-auto">
                            Estamos prontos para analisar seu caso e oferecer a melhor estratégia para proteger seus interesses civis e familiares.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=5551985128006"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-whatsapp hover:bg-whatsapp-hover text-white font-black text-lg rounded-xl transition-all transform hover:scale-105 shadow-lg"
                        >
                            {/* 2. Ícone atualizado para o React Icon IoLogoWhatsapp */}
                            <IoLogoWhatsapp className="text-2xl" />
                            Falar com Ricardo Pedro
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
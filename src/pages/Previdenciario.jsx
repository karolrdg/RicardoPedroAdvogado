import { useState, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiCheckCircle } from 'react-icons/hi';

export default function Previdenciario() {
    const texto = "Direito Previdenciário";
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
            titulo: "Auxílio-Doença e Benefício por Incapacidade",
            desc: "Organização e protocolo de pedidos de benefício por incapacidade temporária ou permanente, com preparo prévio para perícia médica.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            titulo: "Benefício de Prestação Continuada (BPC/LOAS)",
            desc: "Assessoria completa para concessão do benefício assistencial ao idoso ou pessoa com deficiência, com foco no preenchimento dos requisitos legais.",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            titulo: "Aposentadorias",
            desc: "Atuação integral no requerimento de aposentadorias por idade, tempo de contribuição, especial e da pessoa com deficiência.",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        },
        {
            titulo: "Pensão por Morte",
            desc: "Análise da qualidade de segurado, dependência econômica e instrução documental correta para evitar indeferimentos.",
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
                        Especialista em Direito Previdenciário
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 min-h-[60px]">
                        <span className="text-white">
                            {displayText}
                            <span className="ml-1 text-secondary animate-pulse">|</span>
                        </span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed">
                        Assessoria jurídica para garantir sua aposentadoria e benefícios junto ao INSS com agilidade e segurança técnica.
                    </p>
                </div>
            </section>

            {/* Principais Serviços */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Principais Serviços</h2>
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
                                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                                    {item.titulo}
                                </h3>
                                <p className="text-primary/70 leading-relaxed text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Grid de Checks Padronizada conforme sua imagem */}
                <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        "Planejamento Previdenciário",
                        "Revisão de Benefícios",
                        "Recursos Administrativos no INSS",
                        "Averbação de Tempo de Serviço",
                        "Regularização de Contribuições e CNIS"
                    ].map((texto, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-secondary/10 hover:shadow-md transition-all duration-300"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 text-secondary shrink-0">
                                <HiCheckCircle className="w-6 h-6" />
                            </div>
                            <span className="text-primary font-bold text-sm md:text-base leading-tight">
                                {texto}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Dúvidas sobre sua aposentadoria?</h3>
                        <p className="text-foreground/70 mb-10 max-w-xl mx-auto">
                            Analise seu caso com um especialista. Clique abaixo para iniciar seu atendimento pelo WhatsApp.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=5551985128006"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-whatsapp hover:bg-whatsapp-hover text-white font-black text-lg rounded-xl transition-all transform hover:scale-105 shadow-lg"
                        >
                            <IoLogoWhatsapp className="text-2xl" />
                            Falar com Ricardo Pedro
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
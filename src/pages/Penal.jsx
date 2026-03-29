import { useState, useEffect } from "react";

export default function Penal() {
    const texto = "Direito Penal"; // texto que será digitado
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(texto.slice(0, i + 1));
            i++;
            if (i === texto.length) clearInterval(interval);
        }, 120); // velocidade da digitação
        return () => clearInterval(interval);
    }, []);

    const demandas = [
        {
            titulo: "Prisão em Flagrante e Delegacia",
            desc: "Acompanhamento imediato em delegacias para garantir que seus direitos constitucionais não sejam violados durante inquérito policial.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" // Escudo
        },
        {
            titulo: "Audiência de Custódia",
            desc: "Atuação incisiva nas primeiras 24h para demonstrar ao juiz a desnecessidade da prisão preventiva e buscar liberdade provisória.",
            icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 00-6.001 0M18 7l-3 9m3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" // Balança
        },
        {
            titulo: "Habeas Corpus",
            desc: "Impetração em Tribunais Estaduais e Superiores (STJ e STF) sempre que houver constrangimento ilegal ou abuso de autoridade.",
            icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" // Prédio Tribunal
        },
        {
            titulo: "Execução Penal",
            desc: "Acompanhamento de quem já cumpre pena, solicitando progressão de regime, livramento condicional e remição de pena.",
            icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" // X (Restrição)
        }
    ];

    return (
        <main className="bg-foreground text-primary min-h-screen">
            {/* Hero Subpage - Consistente */}
            <section className="relative bg-primary text-foreground py-28 px-6 text-center overflow-hidden border-b-4 border-secondary/20">
                {/* Detalhe abstrato de fundo Penal (sutil) */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-900 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
                        Defesa Criminal Especializada
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 min-h-[60px]">
                        <span className="text-white">
                            {displayText}
                            <span className="ml-1 text-secondary animate-pulse">|</span>
                        </span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed">
                        Atuação técnica, ágil e sigilosa, desde o acompanhamento em delegacia até as instâncias superiores, visando proteger sua liberdade e seus direitos fundamentais.
                    </p>
                </div>
            </section>

            {/* Principais Demandas */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Podemos Ajudar</h2>
                    <div className="h-1 w-20 bg-secondary rounded-full"></div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {demandas.map((item, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-secondary/20 hover:border-secondary flex gap-6 items-start">
                            {/* Ícone Estilizado - Fundo Vermelho Sutil p/ Penal */}
                            <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-xl bg-red-50 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
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

                {/* Call to Action Centralizado - PLANTÃO PENAL */}
                <div className="mt-20 bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10">
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-6 text-red-500 font-black uppercase tracking-widest text-sm">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            Emergência 24h
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Precisa de auxílio jurídico especializado agora?</h3>
                        <p className="text-foreground/70 mb-10 max-w-xl mx-auto">
                            Clique no botão abaixo para falar diretamente com nosso plantão penal via WhatsApp. Atendimento ágil e sigiloso.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=5551985128006"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-whatsapp hover:bg-whatsapp-hover text-white font-black text-lg rounded-xl transition-all transform hover:scale-105 shadow-lg"
                        >
                            {/* Ícone Whatsapp Simples */}
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.53.909 3.039 1.389 4.625 1.39 5.4 0 9.793-4.393 9.795-9.793 0-2.618-1.02-5.079-2.872-6.932-1.856-1.853-4.316-2.873-6.936-2.873-5.399 0-9.791 4.394-9.794 9.795 0 1.766.47 3.489 1.359 5.002l-.994 3.633 3.717-.974z" />
                            </svg>
                            Falar com Ricardo Pedro
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
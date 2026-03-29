import { useState, useEffect } from "react";

export default function Trabalho() {
    const texto = "Direito do Trabalho";
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
            titulo: "Horas extras não pagas",
            desc: "Realização habitual de horas extras sem pagamento adequado gera direito à cobrança retroativa com reflexos em férias e FGTS.",
            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            titulo: "Reconhecimento de vínculo",
            desc: "Mesmo sem carteira assinada, a relação de emprego pode ser reconhecida se houver subordinação e habitualidade.",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        },
        {
            titulo: "Assédio moral",
            desc: "Humilhações e perseguições repetidas no ambiente de trabalho geram direito à indenização por danos morais.",
            icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        },
        {
            titulo: "Doença Ocupacional",
            desc: "Empregados que adoecerem em razão do trabalho têm direito à estabilidade ou indenizações substitutivas.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        }
    ];

    return (
        <main className="bg-foreground text-primary min-h-screen">
            {/* Hero Subpage */}
            <section className="relative bg-primary text-foreground py-28 px-6 text-center overflow-hidden">
                {/* Detalhe abstrato de fundo */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <span className="text-secondary font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
                        Área de Atuação
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 min-h-[60px]">
                        <span className="text-white">
                            {displayText}
                            <span className="ml-1 text-secondary animate-pulse">|</span>
                        </span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed">
                        Defendemos empregados e empregadores com foco na cobrança de direitos não pagos e na segurança jurídica das relações de trabalho.
                    </p>
                </div>
            </section>

            {/* Principais Demandas */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Principais Demandas</h2>
                    <div className="h-1 w-20 bg-secondary rounded-full"></div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {demandas.map((item, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-secondary/20 hover:border-secondary flex gap-6">
                            {/* Ícone Estilizado */}
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


                <div className="mt-20 bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Precisa de auxílio jurídico especializado?</h3>
                        <p className="text-foreground/70 mb-10 max-w-xl mx-auto">
                            Clique no botão abaixo para falar diretamente com nosso plantão via WhatsApp e tirar suas dúvidas.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=5551985128006"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-whatsapp hover:bg-whatsapp-hover text-white font-black text-lg rounded-xl transition-all transform hover:scale-105 shadow-lg"
                        >

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
import { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// Importando a versão Logo do Ionicons 5 que costuma ser a padrão de contorno em muitos temas
import { IoLogoWhatsapp } from "react-icons/io5";

const areas = [
    {
        titulo: "Direito do Trabalho",
        descricao: "Defesa técnica para trabalhadores que buscam justiça e o cumprimento fiel de seus direitos trabalhistas.",
        itens: ["Rescisões", "Horas Extras", "Assédio", "Sem Carteira"],
        link: "/trabalho",
        isEmergencia: false,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        titulo: "Direito Penal",
        descricao: "Atuação estratégica e imediata em todas as fases do processo para garantir sua liberdade e defesa.",
        itens: ["Flagrante", "Habeas Corpus", "Defesa", "Execução"],
        link: "/penal",
        isEmergencia: true,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        )
    },
    {
        titulo: "Direito Civil",
        descricao: "Soluções seguras para conflitos familiares, contratuais e proteção de patrimônio com excelência.",
        itens: ["Família", "Indenizações", "Inventário", "Contratos"],
        link: "/civil",
        isEmergencia: false,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    },
    {
        titulo: "Direito Previdenciário",
        descricao: "Assessoria completa para garantir sua aposentadoria e benefícios junto ao INSS com segurança técnica.",
        itens: ["Aposentadorias", "BPC/LOAS", "Auxílio-Doença", "Revisões"],
        link: "/previdenciario",
        isEmergencia: false,
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        )
    },
];


export default function Areas() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    return (
        <section id="atuacao" className="bg-[#F8F9FA] py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Especialidades</span>
                    <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
                        Áreas de Atuação
                    </h2>
                    <div className="h-1.5 w-24 bg-primary rounded-full mb-4"></div>
                </div>

                <div ref={ref} className="grid md:grid-cols-3 gap-10">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            className={`group relative flex flex-col p-10 rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-4
                            items-center text-center md:items-start md:text-left
                            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                        >

                            <div className="relative w-16 h-16 rounded-2xl bg-primary text-secondary flex items-center justify-center mb-8 shrink-0">
                                {area.icon}

                                {area.isEmergencia && (
                                    <span className="absolute -top-3 -right-3 flex h-8 w-8 z-20">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-8 w-8 bg-red-500 border-2 border-white shadow-lg items-center justify-center text-white text-[10px] font-black uppercase tracking-tighter">
                                            24h
                                        </span>
                                    </span>
                                )}
                            </div>

                            <h3 className="text-2xl font-black mb-4 text-primary group-hover:text-secondary transition-colors">
                                {area.titulo}
                            </h3>
                            <p className="text-primary/70 mb-6 leading-relaxed font-light">
                                {area.descricao}
                            </p>

                            {/* BOTÃO WHATSAPP COM ÍCONE DE CONTORNO */}
                            {area.isEmergencia && (
                                <a
                                    href="https://api.whatsapp.com/send?phone=5551985128006&text=Olá,%20preciso%20de%20atendimento%20de%20emergência%20penal."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm rounded-2xl transition-all transform hover:scale-105 shadow-lg mb-8 w-full justify-center md:justify-start md:w-auto"
                                >
                                    {/* Ícone Outline do React Icons */}
                                    <IoLogoWhatsapp className="text-2xl" />
                                    Plantão 24h WhatsApp
                                </a>
                            )}

                            <div className="flex flex-wrap gap-2 mb-10 justify-center md:justify-start">
                                {area.itens.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-lg bg-gray-50 text-primary/40 group-hover:bg-secondary group-hover:text-primary transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <RouterLink
                                to={area.link}
                                className="mt-auto flex items-center justify-between font-bold text-primary py-4 px-6 rounded-xl border border-primary/10 hover:bg-primary hover:text-white transition-all duration-300 group/btn w-full"
                            >
                                Detalhes da Área
                                <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                            </RouterLink>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
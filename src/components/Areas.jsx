import { useEffect, useRef, useState } from "react"

const areas = [
    {
        titulo: "Direito do Trabalho",
        descricao: "Defendemos os direitos de quem vive do próprio trabalho.",
        itens: [
            "Rescisões e Justa Causa",
            "Trabalho sem carteira",
            "Horas extras",
            "Assédio moral",
        ],
    },
    {
        titulo: "Direito Penal",
        descricao: "Defesa técnica especializada para proteger sua liberdade.",
        itens: [
            "Prisão em flagrante",
            "Habeas corpus",
            "Defesa criminal",
            "Execução penal",
        ],
    },
    {
        titulo: "Direito Civil",
        descricao: "Proteção patrimonial e soluções jurídicas eficientes.",
        itens: [
            "Direito de família",
            "Indenizações",
            "Inventários",
            "Contratos",
        ],
    },
]

export default function Areas() {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])

    return (
        <section id="atuacao" className="bg-gray-100 py-20 px-6">

            {/* TÍTULO */}
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                Nossas Áreas de Atuação
            </h2>

            {/* GRID */}
            <div
                ref={ref}
                className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
            >
                {areas.map((area, index) => (
                    <div
                        key={index}
                        style={{ transitionDelay: `${index * 150}ms` }}
                        className={`group relative bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-500 ease-out hover:-translate-y-3 overflow-hidden
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
                    >

                        {/* Glow */}
                        <span className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition"></span>

                        {/* Linha animada */}
                        <div className="h-1 w-0 bg-secondary mb-4 group-hover:w-full transition-all duration-300"></div>

                        {/* Título */}
                        <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition">
                            {area.titulo}
                        </h3>

                        {/* Texto */}
                        <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition">
                            {area.descricao}
                        </p>

                        {/* Lista */}
                        <ul className="text-gray-500 text-sm mb-4 space-y-1">
                            {area.itens.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>

                        {/* Link */}
                        <span className="text-secondary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                            Saber mais →
                        </span>

                    </div>
                ))}
            </div>
        </section>
    )
}
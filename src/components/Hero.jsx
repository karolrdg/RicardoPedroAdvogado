import { useState, useEffect } from "react"

export default function Hero() {
    const texto = "seus direitos"
    const [displayText, setDisplayText] = useState("")

    useEffect(() => {
        let i = 0

        const interval = setInterval(() => {
            setDisplayText(texto.slice(0, i + 1))
            i++

            if (i === texto.length) {
                clearInterval(interval)
            }
        }, 80)

        return () => clearInterval(interval)
    }, [])

    return (
        <section
            id="home"
            className="bg-primary text-foreground flex flex-col items-center justify-center text-center px-6 py-24"
        >

            {/* TÍTULO */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Protegendo{" "}
                <span className="bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
                    {displayText}
                    <span className="ml-1 animate-pulse">|</span>
                </span>
                com <br />
                <span className="text-secondary">
                    Ética e Segurança Jurídica
                </span>
            </h1>

            {/* DESCRIÇÃO */}
            <p className="max-w-2xl text-gray-300 mb-8 leading-relaxed">
                Atuação especializada nas áreas{" "}
                <span className="text-secondary font-semibold">
                    Trabalhista, Penal e Cível
                </span>.
                Transformamos injustiças em{" "}
                <span className="text-secondary font-semibold">
                    direitos garantidos
                </span>{" "}
                e oferecemos suporte completo para você.
            </p>

            {/* BOTÃO */}
            <a
                href="https://api.whatsapp.com/send?phone=5551985128006"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp hover:bg-whatsapp-hover text-white px-6 py-3 rounded-lg transition transform hover:scale-105"
            >
                Fale conosco no WhatsApp
            </a>

        </section>
    )
}
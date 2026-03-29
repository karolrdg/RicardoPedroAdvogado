import ricardopedro from "../assets/ricardopedro.jpg"

export default function Sobre() {
    return (
        <section id="sobre" className="bg-primary text-foreground py-20 px-6">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* IMAGEM */}
                <img
                    src={ricardopedro}
                    alt="Advogado"
                    className="w-72 h-72 object-cover rounded-2xl shadow-lg"
                />

                {/* TEXTO */}
                <div>

                    <h2 className="text-3xl font-bold mb-6">
                        Sobre o Profissional
                    </h2>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                        <span className="text-secondary font-semibold">
                            Ricardo Pedro Corrêa
                        </span>{" "}
                        é advogado formado pela UNISINOS, com atuação ativa em comissões
                        e nos quadros diretivos da OAB/RS.
                    </p>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                        Com mais de 10 anos de experiência, atua desde 2012 de forma
                        especializada, possuindo pós-graduação em Mediação, Conciliação
                        e Direito do Trabalho.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        Presta assistência completa nas áreas{" "}
                        <span className="text-secondary font-semibold">
                            Trabalhista, Penal e Cível
                        </span>, sempre pautado pela ética, transparência e compromisso.
                    </p>

                </div>
            </div>
        </section>
    )
}
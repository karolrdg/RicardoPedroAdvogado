import ricardopedro from "../assets/ricardopedro.jpeg"

export default function Sobre() {
    return (
        <section id="sobre" className="bg-primary text-foreground py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* CONTAINER DA IMAGEM COM DETALHE UI */}
                <div className="relative flex justify-center">

                    <div className="absolute -bottom-4 -right-4 w-72 h-72 border-2 border-secondary rounded-2xl hidden md:block"></div>

                    <div className="relative z-10">
                        <img
                            src={ricardopedro}
                            alt="Ricardo Pedro Corrêa"
                            className="w-72 h-60 object-cover rounded-2xl shadow-2xl"
                        />
                        {/* Selo de Experiência (Opcional, mas dá um toque UI legal) */}
                        <div className="absolute -bottom-6 -left-6 bg-secondary text-primary font-bold p-4 rounded-lg shadow-lg hidden md:block">
                            <p className="text-2xl leading-none">10+</p>
                            <p className="text-[10px] uppercase tracking-tighter">Anos de Experiência</p>
                        </div>
                    </div>
                </div>

                {/* TEXTO */}
                <div className="flex flex-col">
                    {/* Badge Superior */}
                    <span className="text-secondary text-sm font-bold uppercase tracking-[0.2em] mb-4">
                        Trajetória Profissional
                    </span>

                    <h2 className="text-4xl font-bold mb-8 leading-tight">
                        Sobre o <span className="text-secondary">Especialista</span>
                    </h2>

                    <div className="space-y-6">
                        <p className="text-foreground/80 text-lg leading-relaxed">
                            <span className="text-white font-semibold">
                                Ricardo Pedro Corrêa
                            </span>{" "}
                            é advogado formado pela <span className="italic">UNISINOS</span>, com atuação ativa em comissões
                            e nos quadros diretivos da OAB/RS.
                        </p>

                        <p className="text-foreground/70 leading-relaxed border-l-2 border-secondary/30 pl-6 py-2 italic">
                            Com mais de 10 anos de experiência, atua desde 2012 de forma
                            especializada, possuindo pós-graduação em Mediação, Conciliação
                            e Direito do Trabalho.
                        </p>

                        <p className="text-foreground/80 leading-relaxed">
                            Presta assistência completa nas áreas{" "}
                            <span className="text-secondary font-semibold">
                                Trabalhista, Penal, Cível e Previdenciária
                            </span>, sempre pautado pela ética, transparência e pelo compromisso inabalável com a justiça.
                        </p>
                    </div>


                    <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-4">
                        <div className="w-10 h-[1px] bg-secondary"></div>
                        <p className="text-xs uppercase tracking-widest text-foreground/50">OAB/RS 84.654</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
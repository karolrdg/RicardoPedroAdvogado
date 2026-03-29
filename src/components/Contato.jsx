export default function Contato() {
    return (
        <section id="contato" className="bg-gray-100 py-20 px-6">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* INFO */}
                <div>

                    <h2 className="text-3xl font-bold mb-6 text-primary">
                        Contato e Localização
                    </h2>

                    <p className="text-gray-600 mb-6">
                        Entre em contato para agendar seu atendimento ou tirar dúvidas.
                    </p>

                    <div className="space-y-4 text-gray-700">

                        <p>
                            <strong>Endereço:</strong><br />
                            Rua Nossa Senhora da Conceição, 443<br />
                            Sapucaia do Sul/RS
                        </p>

                        <p>
                            <strong>E-mail:</strong><br />
                            ricardopedros@yahoo.com.br
                        </p>

                        <p>
                            <strong>Telefone / WhatsApp:</strong><br />
                            (51) 98512-8006
                        </p>

                    </div>

                    {/* BOTÃO */}
                    <a
                        href="https://api.whatsapp.com/send?phone=5551985128006"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-8 bg-whatsapp hover:bg-whatsapp-hover text-white px-6 py-3 rounded-lg transition transform hover:scale-105 hover:shadow-lg"
                    >
                        Agendar Atendimento
                    </a>

                </div>

                {/* MAPA / IMAGEM */}
                <iframe
                    src="https://www.google.com/maps?q=Rua+Nossa+Senhora+da+Conceição+443&output=embed"
                    className="w-full h-80 rounded-2xl border-0"
                    loading="lazy"
                ></iframe>

            </div>
        </section>
    )
}
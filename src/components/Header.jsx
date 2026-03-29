export default function Header() {
    return (
        <header className="bg-primary text-foreground shadow-md">

            <div className="max-w-7xl mx-auto flex justify-between items-center p-6">

                {/* LOGO */}
                <div className="text-secondary font-bold text-lg">
                    Seu Logotipo
                </div>

                {/* MENU */}
                <nav className="flex gap-6 items-center">

                    <a href="#home" className="hover:text-secondary transition">
                        Início
                    </a>

                    {/* DROPDOWN */}
                    <div className="relative group">
                        <span className="cursor-pointer hover:text-secondary">
                            Áreas de Atuação ▼
                        </span>

                        <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-56">

                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Direito do Trabalho
                            </a>

                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Direito Penal
                            </a>

                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                Direito Civil
                            </a>

                        </div>
                    </div>

                    <a href="#sobre" className="hover:text-secondary transition">
                        Quem Somos
                    </a>

                    <a href="#contato" className="hover:text-secondary transition">
                        Contato
                    </a>

                </nav>
            </div>
        </header>
    )
}
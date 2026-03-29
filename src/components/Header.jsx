export default function Header() {
    return (
        <header className="bg-primary text-foreground p-6 flex justify-between">
            <h1 className="text-secondary font-bold">
                Ricardo logo
            </h1>

            <nav className="flex gap-6">
                <a href="#home">Início</a>
                <a href="#atuacao">Áreas</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
            </nav>
        </header>
    )
}
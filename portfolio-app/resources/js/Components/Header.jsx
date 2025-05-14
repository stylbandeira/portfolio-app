export default function Header(props) {
    return (
        <header className="fixed top-0 left-0 w-full bg-primary_dark shadow-md z-50">
            <div className="grid grid-cols-12 gap-40 p-10 items-center">
                <div className="text-4xl font-bold font-bebas text-primary_light">
                    Portfólio
                </div>

                <nav>
                    <ul class="flex space-x-6 text-primary_light font-medium">
                        <li><a href="#" class="hover:text-primary_alt transition-colors">Início</a></li>
                        <li><a href="#" class="hover:text-primary_alt transition-colors">Sobre</a></li>
                        <li><a href="#" class="hover:text-primary_alt transition-colors">Serviços</a></li>
                        <li><a href="#" class="hover:text-primary_alt transition-colors">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

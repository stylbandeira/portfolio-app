export default function ApplicationLogo(props) {
    return (
        <header className="bg-primary_dark h-[8em] flex justify-left p-20 items-center">
            <h1 className="text-white font-bebas text-[2em] m-20">Portfólio</h1>
            <nav>
                <ul>
                    <li className="text-white font-bebas text-[2em]"><a href="">Home</a></li>
                    <li className="text-white font-bebas text-[2em]"><a href="">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
}

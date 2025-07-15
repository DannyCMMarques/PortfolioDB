import menuContentItens from "../../utils/content/menuContentItens";
import GithubIcon from "./../../assets/Icone_github.png";
import LinkedinIcon from "./../../assets/icone_linkedin.png";
import Logo from "./../../assets/logo_menu.png";
export default function Menu() {
    return (
        <nav className="w-full bg-[#85D4F4] text-[#414ABA] shadow-md">
            <div className="max-w-6xl mx-auto flex flex-row items-center justify-between p-4 gap-4 flex-wrap">
                <div className="flex items-center">
                    <a
                        href="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="h-[60px] w-[60px] md:h-[87px] md:w-[87px] transition-all"
                        />
                    </a>
                </div>

                <ul className="flex justify-between gap-5 text-center flex-wrap">
                    {menuContentItens.map((item) => (
                        <li key={item.id}>
                            <a href={item.link} className="hover:underline">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-3">
                    <a href="https://github.com/DannyCMMarques">
                        <img src={GithubIcon} alt="GitHub" className="w-6 h-6" />
                    </a>
                    <a href="https://br.linkedin.com/in/danny-marques">
                        <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </nav>
    );
}


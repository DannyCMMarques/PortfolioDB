import { useEffect, useState } from "react";
import menuContentItens from "../../utils/content/menuContentItens";
import type { MenuItem } from "../../utils/interfaces/MenuContentInterface";

const LateralNav = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [menu, setMenu] = useState<MenuItem[]>([]);

    useEffect(() => {
        const currentPath = window.location.pathname;

        setMenu(
            menuContentItens.map((item) => ({
                ...item,
                active:
                    item.link === "/"
                        ? currentPath === "/"
                        : currentPath.startsWith(item.link),
            }))
        );
    }, []);

    const handleMenu = (index: number) => {
        const updated = menu.map((item, i) => ({
            ...item,
            active: i === index,
        }));

        setMenu(updated);
        window.location.href = updated[index].link;
    };

    return (
        <aside
            className={`relative h-screen bg-white shadow-lg border-r border-gray-200 flex flex-col transition-all duration-500 ease-in-out overflow-visible ${collapsed ? "w-20" : "w-64"
                }`}
        >
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute top-4 right-0 translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 focus:outline-none transition-colors duration-300 z-10"
            >
                <span
                    className={`text-white text-xl transform transition-transform duration-500 ease-in-out ${collapsed ? "rotate-180" : ""
                        }`}
                >
                    &#x276E;
                </span>
            </button>

            <div className="flex items-center justify-center  border-b border-gray-200">
                <img
                    src="/src/assets/logo.png"
                    alt="Logo"
                    className={`transition-all duration-500 ease-in-out ${collapsed ? "w-28" : "w-32"
                        }`}
                />
            </div>

            <nav >
                <ul className="pt-4 space-y-2">
                    {menu.map((item, index) => (
                        <li
                            key={item.id}
                            onClick={() => handleMenu(index)}
                            className={`cursor-pointer flex items-center rounded mb-4 transform transition-all duration-300 ease-in-out hover:bg-gray-100 px-4 ${item.active
                                    ? "bg-indigo-50 border-r-4 border-indigo-600 text-indigo-600"
                                    : "border-r-4 border-transparent text-black"
                                }`}
                        >
                            <item.icon className={` ${collapsed ? "text-[20px] text-center mx-auto": "text-xl mx-0 mr-3"} `}  />
                            {!collapsed && (
                                <span className="text-sm font-semibold">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default LateralNav;

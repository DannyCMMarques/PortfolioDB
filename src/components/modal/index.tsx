import type { ReactNode } from "react";
import { IoMdCloseCircle } from "react-icons/io";

type ModalProps = {
    children: ReactNode;
    onFechar?: () => void;
    tamanho?: "sm" | "md" | "lg" | "xl"; 
};

const Modal = ({
    children,
    onFechar,
    tamanho = "md",
}: ModalProps) => {
    const tamanhoClasse = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-2xl",
        xl: "max-w-4xl",
    }[tamanho];



    // todo quando for o de cadastro backdrop-blur-sm 
    return (
<div className="fixed inset-0 z-50 bg-gray-600/50 flex items-center justify-center p-4">
            <div className={`bg-white rounded-lg shadow-lg w-full ${tamanhoClasse} p-6 relative`}>
                {/* Botão fechar */}
                {onFechar && (
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                        onClick={onFechar}
                    >
                        <IoMdCloseCircle />

                    </button>
                )}
                <div>
                    {children}
                </div>

                {/* <div className="flex items-center mb-4 space-x-3">
                    {icone && (
                        <div className="w-10 h-10 bg-indigo-100 text-indigo-800 rounded-full flex items-center justify-center text-lg">
                            {icone}
                        </div>
                    )}
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold text-gray-800">{titulo}</h2>
                        {subtitulo && <p className="text-sm text-gray-500">{subtitulo}</p>}
                    </div>
                </div>

                <div className="text-sm text-gray-700">{children}</div> */}
            </div>
        </div>
    );
};

export default Modal;

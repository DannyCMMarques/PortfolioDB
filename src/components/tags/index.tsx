interface TagStatusProps {
    cor: "verde" | "amarelo" | "vermelho";
    texto: string;
}

const TagStatus = ({ cor, texto }: TagStatusProps) => {
    const coresClasses = {
        verde: "bg-green-100 text-green-800",
        amarelo: "bg-yellow-100 text-yellow-800",
        vermelho: "bg-red-100 text-red-800",
    };

    return (
        <span
            className={`text-xs font-semibold px-3 py-1 rounded-full inline-block ${coresClasses[cor]}`}
        >
            {texto}
        </span>
    );
};

export default TagStatus;

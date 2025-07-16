export interface CardProjetoProps {
    imagem: string;
    titulo: string;
    tecnologias: string[];
    descricao: string;
    botao: {
        label: string;
        url: string;
    };
}
export interface ContainerProps {
    children: React.ReactNode;
}

export interface HabilidadeProps {
    titulo: string;
    nivel: number;
}

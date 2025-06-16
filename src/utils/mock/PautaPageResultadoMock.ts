import type { PautaResultadoPage } from "../../service/interfaces/interfacePauta";

export const PautaResultadoPageMock: PautaResultadoPage = {
    content: [
        {
            id: 2,
            titulo: "Aumento do orçamento educacional",
            descricao: "Votação sobre o aumento de 20% no orçamento destinado à educação.",
            status: "VOTADA",
            votosFavor: 120,
            votosContra: 80,
            votosTotais: 200,
            resultado: "APROVADO"
        },
        {
            id: 4,
            titulo: "Reforma tributária",
            descricao: "Discussão sobre reforma no sistema de arrecadação de impostos.",
            status: "VOTADA",
            votosFavor: 95,
            votosContra: 105,
            votosTotais: 200,
            resultado: "REPROVADO"
        }
    ],
    pageable: {
        pageNumber: 0,
        pageSize: 2
    },
    totalElements: 2,
    totalPages: 1,
    last: true
};
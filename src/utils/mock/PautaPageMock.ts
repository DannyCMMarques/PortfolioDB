import type { PautaPage } from "../../service/interfaces/interfacePauta";

export const PautaPageMock: PautaPage = {
    content: [
        {
            id: 1,
            titulo: "Criação de nova emenda",
            descricao: "Proposta para adicionar uma emenda ao artigo 5º da constituição.",
            status: "NAO_VOTADA"
        },
        {
            id: 2,
            titulo: "Redução da carga tributária",
            descricao: "Proposta para reduzir impostos em produtos básicos.",
            status: "EM_VOTACAO"
        },
        {
            id: 3,
            titulo: "Revisão da previdência",
            descricao: "Votação final sobre mudanças nas regras da previdência.",
            status: "VOTADA"
        }
    ],
    pageable: {
        pageNumber: 0,
        pageSize: 3
    },
    totalElements: 3,
    totalPages: 1,
    last: true
};
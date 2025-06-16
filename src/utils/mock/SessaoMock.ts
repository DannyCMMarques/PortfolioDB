import type { SessaoIniciadaResponseDTO } from "../../service/interfaces/interfaceSessao";

export const sessoesMock: SessaoIniciadaResponseDTO[] = [
    {
        id: 5,
        pauta: {
            id: 5,
            titulo: "Reforma do Estatuto",
            descricao: "Proposta de alteração nos artigos 2º e 3º do estatuto.",
            status: "VOTADA",
            votosFavor: 3,
            votosContra: 1,
            votosTotais: 4,
            resultado: "APROVADO",
        },
        duracao: 5,
        status: "FINALIZADA",
        horarioInicio: "19/05/2025 14:00:00",
        horarioFim: "19/05/2025 14:05:00",
        votos: [
            {
                id: 1,
                voto: "SIM",
                associado: {
                    id: 1,
                    nome: "João Atualizado",
                },
            },
            {
                id: 2,
                voto: "SIM",
                associado: {
                    id: 2,
                    nome: "Maria Souza",
                },
            },
            {
                id: 3,
                voto: "SIM",
                associado: {
                    id: 3,
                    nome: "Carlos Lima",
                },
            },
            {
                id: 4,
                voto: "NAO",
                associado: {
                    id: 4,
                    nome: "Danielly Marques",
                },
            },
        ],
    },
    {
        id: 4,
        pauta: {
            id: 4,
            titulo: "Revisão do orçamento",
            descricao: "Discussão sobre a realocação do orçamento anual.",
            status: "NAO_VOTADA",
            votosFavor: 0,
            votosContra: 0,
            votosTotais: 0,
            resultado: "EM_ANDAMENTO",
        },
        duracao: 300,
        status: "NAO_INICIADA",
        horarioInicio: null,
        horarioFim: null,
        votos: [],
    },
    {
        id: 3,
        pauta: {
            id: 3,
            titulo: "Criar um novo artigo",
            descricao: "Proposta de criação de artigo.",
            status: "EM_VOTACAO",
            votosFavor: 2,
            votosContra: 0,
            votosTotais: 2,
            resultado: "EM_ANDAMENTO",
        },
        duracao: 5,
        status: "EM_ANDAMENTO",
        horarioInicio: "19/05/2025 18:49:12",
        horarioFim: null,
        votos: [
            {
                id: 2,
                voto: "SIM",
                associado: {
                    id: 1,
                    nome: "João Atualizado",
                },
            },
            {
                id: 3,
                voto: "SIM",
                associado: {
                    id: 3,
                    nome: "Danielly Marques",
                },
            },
        ],
    },
];

import imagemJogo from "./../../assets/agilelife-jogo.png";
import imagemApp from "./../../assets/lista-app.png";
import imagemMarvel from "./../../assets/marvel-store.png";
import imagemNaruto from "./../../assets/naruto.jpg";
import imagemSistemaHospital from "./../../assets/sistema-consultorios.png";
import imagemVotacao from "./../../assets/votacao.png";

export const projetos = [
    {
        imagem: imagemJogo,
        titulo: "AgileLife - Jogo Multiplayer",
        tecnologias: [
            "React",
            "TypeScript",
            "Spring",
            "Java",
            "WebSocket",
            "Jest",
            "React Testing Library",
        ],
        descricao:
            "Jogo multiplayer web que simula o ambiente de equipes ágeis, desafiando os participantes a lidar com situações reais do desenvolvimento de software utilizando WebSockets.",
        botao: {
            label: "Acessar",
            url: "https://main-agile-life-web.onrender.com/",
        },
    },
    {
        imagem: imagemApp,
        titulo: "App Lista de Compras",
        tecnologias: [
            "React Native",
            "TypeScript",
            "Firebase",
            "Jest",
            "React Query",
            "React-Native Testing Library",
        ],
        descricao:
            "Aplicativo para criar e gerenciar listas de compras, com itens personalizados, marcação de comprados e compartilhamento via WhatsApp ou e-mail",
        botao: {
            label: "Acessar",
            url: "https://github.com/DannyCMMarques/Lista-de-Compras-ReactNative?tab=readme-ov-file",
        },
    },
    {
        imagem: imagemVotacao,
        titulo: "Votação Cooperativa-Front",
        tecnologias: ["React", "TypeScript", "Vitest", "React Testing Library"],
        descricao:
            "Aplicação front-end responsiva que consome uma API para permitir o cadastro de pautas, abertura de sessões temporizadas e votação única por associados, com exibição do resultado.",
        botao: {
            label: "Acessar",
            url: "https://github.com/DannyCMMarques/Desafio-Votacao-Front",
        },
    },
    {
        imagem: imagemVotacao,
        titulo: "Desafio Votacao-Back",
        tecnologias: ["Java", "Spring Boot", "JUnit", "Mockito", "Flyway"],
        descricao:
            "API REST  para gerenciar sessões de votação em cooperativas, com cadastro de pautas, controle de votos únicos por associado, sessões com tempo definido e persistência dos dados.",
        botao: {
            label: "Acessar",
            url: "https://github.com/DannyCMMarques/desafio-votacao-spring-java",
        },
    },
    {
        imagem: imagemNaruto,
        titulo: "Desafio Ninjas Naruto",
        tecnologias: [
            "Java",
            "Spring Boot",
            "JUnit",
            "Mockito",
            "Flyway",
            "WebSocket",
            "STOMP",
            "JWT",
        ],
        descricao:
            "Projeto inspirado no universo Naruto, com cadastro de personagens e usuários, além de batalhas dinâmicas entre ninjas em tempo real. Inclui funcionalidades de autenticação",
        botao: {
            label: "Acessar",
            url: "https://github.com/DannyCMMarques/Crud-Desafio-Ninja",
        },
    },
    {
        imagem: imagemMarvel,
        titulo: "Marvel Comics Store",
        tecnologias: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Axios",
        ],
        descricao:
            "Marvel Comics Store, um projeto desenvolvido simulando uma loja virtual de quadrinhos da Marvel utilizando a API oficial da Marvel.",
        botao: {
            label: "Acessar",
            url: "https://github.com/DannyCMMarques/Loja-quadrinhos-React-APIMarvel",
        },
    },
    {
        imagem: imagemSistemaHospital,
        titulo: "Sistema de Gerenciamento de Consultórios",
        tecnologias: ["React", "JavaScript", "React Query",],
        descricao:
            "Um sistema completo para gerenciar consultórios médicos, permitindo o cadastro e a gestão de pacientes, usuários e consultas.",
        botao: {
            label: "Acessar",
            url: "https://github.com/DannyCMMarques/Sistema-Saude-Front",
        },
    },
];

import { useCallback, useEffect, useState } from "react";
import { FaVoteYea } from "react-icons/fa";
import Cards from "../../components/cards/Cards";
import ContainerComponent from "../../components/container";
import Paginador from "../../components/paginador";
import type {
    SessaoIniciadaPage,
    SessaoIniciadaResponseDTO,
    SessaoPage,
} from "../../service/interfaces/interfaceSessao";
import useSessaoService from "../../service/useSessaoService";
import { handleStatus } from "../../utils/helper/StatusUtils";

function isSessaoIniciadaPage(
    page: SessaoIniciadaPage | SessaoPage
): page is SessaoIniciadaPage {
    return (
        page.content.length > 0 &&
        "horarioInicio" in page.content[0] &&
        "votos" in page.content[0]
    );
}

const SessaoPage = () => {
    const sessaoService = useSessaoService();
    const [sessoes, setSessoes] = useState<SessaoIniciadaResponseDTO[]>([]);
    const [pagina, setPagina] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const size = 10;

    const exibirSessoes = useCallback(async (page = 1) => {
        setIsLoading(true);
        try {
            const response = await sessaoService.listarSessao(page, size);

            if (isSessaoIniciadaPage(response)) {
                setSessoes(response.content);
                setTotalPages(response.totalPages);
            } else {
                console.error("Resposta não é SessaoIniciadaPage.");
            }
        } catch (err) {
            console.error("Erro ao buscar sessões:", err);
        } finally {
            setIsLoading(false);
        }
    }, [sessaoService]);

    useEffect(() => {
        exibirSessoes(pagina);
    }, [pagina, size]);

    return (
        <div className="items-center m-auto p-auto">
            <div>
                <p className="text-start font-bold text-3xl">Sessão</p>
            </div>

            <ContainerComponent>
                {isLoading ? (
                    <p className="text-sm text-gray-700">Carregando sessões...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {sessoes.map((sessao) => (
                            <Cards
                                key={sessao.id}
                                pautaTitulo={sessao.pauta.titulo}
                                id={sessao.id}
                                icon={<FaVoteYea />}
                                status={handleStatus(sessao.status)}
                                duracao={sessao.duracao}
                                horarioInicio={sessao.horarioInicio}
                                horarioFim={sessao.horarioFim}
                                isSessao={true}
                            />
                        ))}
                    </div>
                )}
            </ContainerComponent>

            <Paginador
                paginaAtual={pagina}
                totalPaginas={totalPages}
                totalItens={sessoes.length}
                aoMudarPagina={setPagina}
            />
        </div>
    );
};

export default SessaoPage;

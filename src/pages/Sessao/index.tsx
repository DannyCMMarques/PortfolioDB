import { FaVoteYea } from "react-icons/fa";
import Cards from "../../components/cards/Cards";
import ContainerComponent from "../../components/container";
import type {
    SessaoIniciadaResponseDTO,
    SessaoPage,
} from "../../service/interfaces/interfaceSessao";
import { sessoesMock } from "../../utils/mock/SessaoMock";
import { handleStatus } from "../../utils/helper/StatusUtils";
import useSessaoService from "../../service/useSessaoService";
import { useCallback, useEffect, useState } from "react";

const SessaoPage = () => {
    const sessaoService = useSessaoService();
    const [sessoes, setSessoes] = useState<SessaoIniciadaResponseDTO[]>([]);
    const [pagina, setPagina] = useState<number>(1);
    const size = 10;
    const [isLoading, setIsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState<number>(0);

    const exibirSessoes = useCallback(
        async (page = 1) => {
            setIsLoading(true);
            try {
                const sessoesData: SessaoPage = await sessaoService.listarSessao(
                    page,
                    size
                );
                console.log(sessoesData);
                setSessoes(sessoesData?.content);
                console.log(sessoes);
                setTotalPages(sessoesData.totalPages);
                console.log(totalPages);
            } catch (err) {
                console.error("Erro ao buscar itens:", err);
            } finally {
                setIsLoading(false);
            }
        },
        [sessaoService]
    );
    useEffect(() => {
        exibirSessoes(pagina);
    }, [pagina, size]);

    return (
        <div className="items-center m-auto p-auto">
            <div>
                <p className="text-start font-bold text-3xl">Sessao</p>
            </div>
            <ContainerComponent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {sessoes.map((sessao) => (
                        <Cards
                            key={sessao?.id}
                            pautaTitulo={sessao?.pauta.titulo}
                            idSessao={sessao?.id}
                            icon={<FaVoteYea />}
                            status={handleStatus(sessao?.status)}
                            duracao={sessao?.duracao}
                            horarioInicio={sessao?.horarioInicio}
                            horarioFim={sessao?.horarioFim}
                            isSessao={true}
                        />
                    ))}
                </div>
            </ContainerComponent>
        </div>
    );
};

export default SessaoPage;

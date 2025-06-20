import { useCallback, useEffect, useState } from "react";
import { IoNewspaper } from "react-icons/io5";
import Cards from "../../components/cards/Cards";
import ContainerComponent from "../../components/container";
import Paginador from "../../components/paginador";
import type {
    PautaPage,
    PautaResponseDTO,
} from "../../service/interfaces/interfacePauta";
import usePautaService from "../../service/usePautaService";
import { handleStatus } from "../../utils/helper/StatusUtils";

const PautasPage = () => {
    const pautasService = usePautaService();
    const [pautas, setPautas] = useState<PautaResponseDTO[]>([]);
    const [pagina, setPagina] = useState<number>(1);
    const size = 10;
    const [isLoading, setIsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState<number>(0);

    const handleResumo = (texto: string) => {
        const limite = 230;
        if (texto.length <= limite) return texto;
        return texto.slice(0, limite - 3).trim() + "...";
    };
    const exibirPautas = useCallback(
        async (page = 1) => {
            setIsLoading(true);
            try {
                const pautasData: PautaPage = await pautasService.listarPauta(
                    page,
                    size
                );
                setPautas(pautasData?.content);
                setTotalPages(pautasData.totalPages);
                console.log("eu sou total paginas",totalPages);
            } catch (err) {
                console.error("Erro ao buscar itens:", err);
            } finally {
                setIsLoading(false);
            }
        },
        [pautasService]
    );
    useEffect(() => {
        exibirPautas(pagina);
    }, [pagina, size]);

    return (
        <div className="items-center mt-auto pt-auto">
            <div>
                <p className="text-start font-bold text-3xl">Pautas</p>
            </div>
            <ContainerComponent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {pautas.map((pauta) => (
                        <Cards
                            key={pauta.id}
                            pautaTitulo={pauta.titulo}
                            descricao={handleResumo(pauta.descricao)}
                            icon={<IoNewspaper />}
                            status={handleStatus(pauta.status)}
                            id={pauta.id}

                        />
                    ))}
                </div>
            </ContainerComponent>

            <div>
                <Paginador
                    paginaAtual={pagina}
                    totalPaginas={totalPages}
                    totalItens={pautas.length}
                    aoMudarPagina={setPagina}
                />
            </div>
        </div>
    );
};

export default PautasPage;

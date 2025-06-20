import { useCallback, useEffect, useState } from "react";
import { IoAddCircleOutline, IoNewspaper } from "react-icons/io5";
import { Bounce, toast, ToastContainer } from "react-toastify";
import Cards from "../../components/cards/Cards";
import ContainerComponent from "../../components/container";
import Modal from "../../components/modal";
import Paginador from "../../components/paginador";
import VisualizarData from "../../components/visualizar-Pauta/Index";
import FormularioPauta from "../../components/form/form_pauta";
import usePautaService from "../../service/usePautaService";
import { handleStatus } from "../../utils/helper/StatusUtils";
import type { PautaPage, PautaResponseDTO } from "../../service/interfaces/interfacePauta";

type ModalState = {
    tipo: "formulario" | "resultado" | null;
    id?: number | null;
};

const PautasPageView = () => {
    const pautaService = usePautaService();
    const [pautas, setPautas] = useState<PautaResponseDTO[]>([]);
    const [pagina, setPagina] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const [modal, setModal] = useState<ModalState>({ tipo: null, id: null });

    const size = 4;

    const exibirPautas = useCallback(async (page = 1) => {
        setIsLoading(true);
        try {
            const response: PautaPage = await pautaService.listarPauta(page, size);
            setPautas(response.content);
            setTotalPages(response.totalPages);
        } catch (err) {
            console.log(err, " erro ao buscar pauta")
        } finally {
            setIsLoading(false);
        }
    }, [pautaService]);

    useEffect(() => {
        exibirPautas(pagina);
    }, [pagina]);

    const abrirModal = (tipo: "formulario" | "resultado", id?: number) => {
        setModal({ tipo, id: id ?? null });
    };

    const fecharModal = () => {
        setModal({ tipo: null, id: null });
    };

    const handleResumo = (texto: string) => {
        const limite = 230;
        return texto.length <= limite ? texto : texto.slice(0, limite - 3).trim() + "...";
    };

    const onDelete = async (id: number) => {
        try {
            await pautaService.deletarPauta(id);
            toast.success("Pauta excluída com sucesso");
            exibirPautas(pagina);
        } catch (err) {
            toast.error(err.response.data.message)
        }
    };

    return (
        <main className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
            <ToastContainer position="top-right" autoClose={5000} theme="colored" transition={Bounce} />

            {modal.tipo === "resultado" && modal.id != null && (
                <Modal onFechar={fecharModal} tamanho="md">
                    <VisualizarData id={modal.id} />
                </Modal>
            )}

            {modal.tipo === "formulario" && (
                <Modal onFechar={fecharModal} tamanho="md">
                    <FormularioPauta
                        id={modal.id ?? undefined}
                        handleClose={fecharModal}
                        onSucesso={() => {
                            exibirPautas(pagina);
                            fecharModal();
                        }}
                    />
                </Modal>
            )}

            <section className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Pautas de Votação</h1>
                    <p className="text-sm text-gray-500">Gerencie as pautas do sistema de votação</p>
                </div>

                <button
                    onClick={() => abrirModal("formulario")}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
                >
                    <IoAddCircleOutline className="text-lg" />
                    Nova Pauta
                </button>
            </section>

            <ContainerComponent>
                {isLoading ? (
                    <p className="text-sm text-gray-700">Carregando pautas...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pautas.map((pauta) => (
                            <Cards
                                key={pauta.id}
                                pautaTitulo={pauta.titulo}
                                descricao={handleResumo(pauta.descricao)}
                                icon={<IoNewspaper />}
                                status={handleStatus(pauta.status)}
                                id={pauta.id}
                                onEditar={(id) => abrirModal("formulario", id)}
                                onExcluir={onDelete}
                                onVerResultados={(id) => abrirModal("resultado", id)}
                            />
                        ))}
                    </div>
                )}
            </ContainerComponent>

            <div className="mt-10">
                <Paginador
                    paginaAtual={pagina}
                    totalPaginas={totalPages}
                    totalItens={pautas.length}
                    aoMudarPagina={setPagina}
                />
            </div>
        </main>
    );
};

export default PautasPageView;

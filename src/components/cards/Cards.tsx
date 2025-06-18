import type { CardsProps } from "../interfaces/CardsProps";
import ModalVisualizarData from "../modal/modal-exibicao";
import TagsResumo from "../tags/tagsResumo";
import InformacaoResumo from "../informacoes_resumo";

const Cards = ({
    icon,
    descricao,
    status,
    resultado,
    horarioInicio,
    horarioFim,
    duracao,
    isSessao,
    pautaTitulo,
    id,
}: CardsProps) => {
    return (
        <div className="bg-indigo-50 rounded-lg p-4 shadow-sm w-full h-full flex flex-col justify-between relative">
            <InformacaoResumo
                icon={icon}
                titulo={isSessao ? `Sessão ${id}` : pautaTitulo ?? ""}
                descricao={descricao}
                duracao={duracao}
                horarioInicio={horarioInicio ?? undefined}
                horarioFim={horarioFim ?? undefined}
                pautaTitulo={isSessao ? pautaTitulo : undefined}
            />

            <div className="mt-auto pt-2 flex justify-between">
                <TagsResumo status={status} resultado={resultado} exibirResultado={!isSessao} />
                {id !== undefined && (
                    <ModalVisualizarData id={id}>
                        Ver Mais
                    </ModalVisualizarData>
                )}
            </div>
        </div>
    );
};

export default Cards;

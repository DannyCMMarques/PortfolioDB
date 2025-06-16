import { FaVoteYea } from "react-icons/fa";
import Cards from "../../components/cards/Cards";
import ContainerComponent from "../../components/container";
import type { SessaoIniciadaResponseDTO } from "../../service/interfaces/interfaceSessao";
import { sessoesMock } from "../../utils/mock/SessaoMock";

const SessaoPage = () => {

    return (
        <div className="items-center m-auto p-auto">
            <div>
                <p className="text-start font-bold text-3xl">Sessao</p>
            </div>
            <ContainerComponent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {sessoesMock.map((sessao: SessaoIniciadaResponseDTO) => (
                        <Cards
                            key={sessao.id}
                            pautaTitulo={sessao.pauta.titulo}
                            idSessao={sessao.id}
                            icon={<FaVoteYea />}
                            status={sessao.status}
                            duracao={sessao.duracao}
                            horarioInicio={sessao.horarioInicio}
                            horarioFim={sessao.horarioFim}
                            isSessao={true}
                        />
                    ))}
                </div>
            </ContainerComponent>
        </div>
    );
};

export default SessaoPage;

import { IoNewspaper } from "react-icons/io5";
import Cards from "../../components/cards/Cards";
import ContainerComponent from "../../components/container";
import { PautaPageMock } from "../../utils/mock/PautaPageMock";
import { PautaResultadoPageMock } from "../../utils/mock/PautaPageResultadoMock";

const PautasPage = () => {

    return (
        <div className="items-center m-auto p-auto">
            <div>
                <p className="text-start font-bold text-3xl">Pautas</p>
            </div>
            <ContainerComponent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {PautaPageMock.content.map((pauta) => (
                        <Cards
                            key={pauta.id}
                            pautaTitulo={pauta.titulo}
                            descricao={pauta.descricao}
                            icon={<IoNewspaper />}
                            status={pauta.status}
                        />
                    ))}
                    {PautaResultadoPageMock.content.map((pauta) => (
                        <Cards
                            key={pauta.id}
                            pautaTitulo={pauta.titulo}
                            descricao={pauta.descricao}
                            icon={<IoNewspaper />}
                            status={pauta.status}
                            resultado={pauta.resultado}
                        />
                    ))}
                </div>
            </ContainerComponent>
        </div>
    );
};

export default PautasPage;

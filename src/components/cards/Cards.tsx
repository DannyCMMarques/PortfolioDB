import { IoNewspaper } from "react-icons/io5";
import { LuAlarmClock, LuCalendarClock } from "react-icons/lu";
import TagStatus from "../tags";
import type { CardsProps } from "../interfaces/CardsProps";

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
    idSessao,
}: CardsProps) => {
    const coresVermelha = ["NAO_VOTADA", "REPROVADO", "NAO_INICIADA"];
    const coresVerde = ["VOTADA", "APROVADO", "FINALIZADA"];

    const corTag = (valor: string) => {
        if (coresVerde.includes(valor)) return "verde";
        if (coresVermelha.includes(valor)) return "vermelho";
        return "amarelo";
    };

    return (
        <div className="bg-indigo-50 rounded-lg p-4 shadow-sm w-full  h-full flex flex-col justify-between relative">
            <div>
                <div className="flex items-center space-x-2 mb-2">
                    {icon && (
                        <div className="w-8 h-8 bg-indigo-200 text-indigo-900 rounded-full flex items-center justify-center">
                            {icon}
                        </div>
                    )}
                    <div className="flex flex-col">
                        <span className="text-md font-medium text-indigo-900">
                            {isSessao ? `Sessão ${idSessao}` : pautaTitulo}
                        </span>
                    </div>
                </div>
                {isSessao && pautaTitulo && (
                    <div className="flex items-center gap-2 mt-2">
                        <IoNewspaper className="text-black" />
                        <p className="text-sm text-gray-600">Pauta: {pautaTitulo}</p>
                    </div>
                )}
                {descricao && (
                    <p
                        className="text-sm break-words
 text-gray-600 mt-1"
                    >
                        {descricao}
                    </p>
                )}

                {duracao && (
                    <div className="flex items-center gap-2 mt-2">
                        <LuAlarmClock className="text-black" />
                        <p className="text-sm text-gray-600">
                            <span className="text-bold"> Duração: </span>
                            {duracao} minutos
                        </p>
                    </div>
                )}

                {horarioInicio && (
                    <div className="flex items-start gap-2 mt-2">
                        <LuCalendarClock className="text-black mt-[2px]" />
                        <p className="text-sm text-gray-600">
                            <span className="text-bold  text-gray-700">Início: </span>{" "}
                            {horarioInicio}
                            {horarioFim && (
                                <span>
                                    {" "}
                                    -<span className="text-bold  text-gray-700"> Fim: </span>{" "}
                                    {horarioFim}
                                </span>
                            )}
                        </p>
                    </div>
                )}
            </div>
            <div className="mt-auto pt-2 flex justify-between">
                <div className="flex gap-2 flex-wrap">
                    <TagStatus cor={corTag(status)} texto={status} />
                    {resultado && <TagStatus cor={corTag(resultado)} texto={resultado} />}
                </div>
                <div>
                    <p className="text-[12px] text-indigo-700 hover:cursor-pointer font-bold hover:underline">
                        Ver Mais
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cards;

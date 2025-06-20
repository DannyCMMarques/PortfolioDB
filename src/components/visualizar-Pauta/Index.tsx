import { useCallback, useEffect, useState } from 'react';
import { IoNewspaper } from 'react-icons/io5';
import { LuCalendarClock } from 'react-icons/lu';
import { useLocation } from 'react-router-dom';
import type { PautaResponseDTO, PautaResultadoDTO } from '../../service/interfaces/interfacePauta';
import type { SessaoIniciadaResponseDTO, SessaoResponseDTO } from '../../service/interfaces/interfaceSessao';
import usePautaService from '../../service/usePautaService';
import useSessaoService from '../../service/useSessaoService';
import GraficoVotos from '../grafico_votacao';
import InformacaoResumo from '../informacoes_resumo';
import TagsResumo from '../tags/tagsResumo';

interface VisualizarDataProps {
    id?: number;
}

const VisualizarData = ({ id }: VisualizarDataProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<PautaResponseDTO | SessaoResponseDTO>();
    const [isSessao, setIsSessao] = useState<boolean>();
    const pautasService = usePautaService();
    const sessaoService = useSessaoService();
    const location = useLocation();

    const getService = () => {
        if (location.pathname.includes('pautas')) {
            setIsSessao(false);
            return pautasService;
        } else if (location.pathname.includes('sessoes')) {
            setIsSessao(true);
            return sessaoService;
        }
        return null;
    };

    const exibirUnico = useCallback(async () => {
        const service = getService();
        if (!service || !id) return;

        setIsLoading(true);
        try {
            const dataRecebida = await service.getById(id);
            setData(dataRecebida);
        } catch (err) {
            console.error('Erro ao buscar item:', err);
        } finally {
            setIsLoading(false);
        }
    }, [id, location.pathname]);

    useEffect(() => {
        exibirUnico();
    }, [exibirUnico]);

    if (isLoading) {
        return (
            <div className="bg-indigo-50 rounded-lg p-4 shadow-sm w-full h-full flex items-center justify-center">
                <p className="text-sm text-gray-700">Carregando...</p>
            </div>
        );
    }

    if (!data || isSessao === undefined) {
        return (
            <div className="bg-indigo-50 rounded-lg p-4 shadow-sm w-full h-full flex items-center justify-center">
                <p className="text-sm text-gray-600">Nenhuma informação encontrada.</p>
            </div>
        );
    }

    let descricao: string | undefined;
    let pautaTitulo: string | undefined;
    let duracao: number | undefined;
    let horarioInicio: string | undefined;
    let horarioFim: string | undefined;
    let titulo: string;
    let resultado: string | undefined;
    let status: string;
    let deveMostrarGrafico: boolean;

    if (isSessao) {
        const sessao = data as SessaoIniciadaResponseDTO;
        descricao = sessao.pauta?.descricao;
        pautaTitulo = sessao.pauta?.titulo;
        duracao = sessao.duracao;
        horarioInicio = sessao.horarioInicio ?? undefined;
        horarioFim = sessao.horarioFim ?? undefined;
        titulo = `Sessão ${sessao.id}`;
        status = sessao.status;
        deveMostrarGrafico = sessao.pauta?.status !== 'NAO_VOTADA';
    } else {
        const pauta = data as PautaResultadoDTO;
        descricao = pauta.descricao;
        pautaTitulo = undefined;
        titulo = pauta.titulo;
        status = pauta.status;
        resultado = pauta.resultado;
        deveMostrarGrafico = pauta.status !== 'NAO_VOTADA';
    }

    return (
        <div className="bg-indigo-50 rounded-lg p-4 shadow-sm w-full h-full flex flex-col justify-between relative">
            <InformacaoResumo
                icon={isSessao ? <LuCalendarClock /> : <IoNewspaper />}
                titulo={titulo}
                descricao={descricao}
                duracao={duracao}
                horarioInicio={horarioInicio}
                horarioFim={horarioFim}
                pautaTitulo={pautaTitulo}
            />

            {deveMostrarGrafico && (
                <GraficoVotos titulo="Distribuição de Votos" data={data} isSessao={!!isSessao} />
            )}

            <div className="mt-2 pt-2 flex gap-2 flex-wrap">
                <span className="text-sm font-bold text-gray-700">Tags: </span>
                <TagsResumo status={status} resultado={resultado} exibirResultado={!isSessao} />
            </div>
        </div>
    );
};

export default VisualizarData;

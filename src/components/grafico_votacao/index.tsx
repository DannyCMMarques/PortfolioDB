import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import type { PautaResponseDTO, PautaResultadoDTO } from "../../service/interfaces/interfacePauta";
import type { SessaoResponseDTO } from '../../service/interfaces/interfaceSessao';

ChartJS.register(ArcElement, Tooltip, Legend);

interface GraficoVotosProps {
    data: SessaoResponseDTO | PautaResponseDTO;
    titulo: string;
    isSessao: boolean;
}
const GraficoVotos = ({ data, titulo, isSessao }: GraficoVotosProps) => {
    let votosFavor: number | undefined;
    let votosContra: number | undefined;

    if (isSessao) {
        const sessaoData = data as SessaoResponseDTO;
        votosFavor = sessaoData.pauta?.votosFavor;
        votosContra = sessaoData.pauta?.votosContra;
    } else {
        const pautaData = data as PautaResultadoDTO;
        votosFavor = pautaData.votosFavor;
        votosContra = pautaData.votosContra;
    }

    const configGrafico = {
        labels: ['Votos Favoráveis', 'Votos Contrários'],
        datasets: [
            {
                label: 'Votos dessa Pauta',
                data: [votosFavor ?? 0, votosContra ?? 0],
                backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="mt-6 w-full">
            <h3 className="text-sm font-bold text-center text-gray-800 mb-2">{titulo}</h3>

            {votosFavor === 0 && votosContra === 0 ? (
                <p className="font-bold text-gray-600 text-center text-xs">Ainda não há votos</p>
            ) : (
                <div className=" flex justify-center m-auto md:w-64">
                    <Pie data={configGrafico} />
                </div>
            )}
        </div>
    );
};
export default GraficoVotos;
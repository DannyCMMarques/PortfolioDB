import bolinhaCheia from './../../assets/bolinha-cheia.png';
import bolinhaVazia from './../../assets/bolinha-vazia.png';

interface HabilidadeProps {
    titulo: string;
    nivel: number;
}

export default function Habilidade({ titulo, nivel }: HabilidadeProps) {
    const totalDeBolinhas = 5;

    return (
        <div className="flex justify-between items-center">
            <ul className="list-disc list-inside ">
                <li className="text-sm">{titulo}</li>
            </ul>
            <div className="flex gap-1">
                {[...Array(totalDeBolinhas)].map((_, indice) => (
                    <img
                        key={indice}
                        src={indice < nivel ? bolinhaCheia : bolinhaVazia}
                        alt={indice < nivel ? 'bolinha cheia' : 'bolinha vazia'}
                        className="w-4 h-4"
                    />
                ))}
            </div>
        </div>
    );
}

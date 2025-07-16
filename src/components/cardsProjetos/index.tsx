import type { CardProjetoProps } from "../interfaces/interfacesComponents";

export default function CardProjeto({
  imagem,
  titulo,
  tecnologias,
  descricao,
  botao,
}: CardProjetoProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-[306px] p-2 flex flex-col">
      <div
        className="w-full h-52 bg-cover bg-center rounded-md mb-3"
        style={{ backgroundImage: `url(${imagem})` }}
      ></div>

      <h3 className="text-xl font-bold">{titulo}</h3>

      <span className="text-[#ED177D] text-sm font-medium uppercase tracking-wide">
        {tecnologias.join(', ')}
      </span>

      <p className="text-md text-gray-800 mb-4" style={{ fontFamily: 'Roboto Flex' }}>
        {descricao}
      </p>

      <div className="mt-auto">
        <a
          href={botao.url}
          className="block bg-[#414ABA] w-full text-white text-sm rounded-md px-4 py-2 font-medium text-center"
        >
          {botao.label}
        </a>
      </div>
    </div>
  );
}

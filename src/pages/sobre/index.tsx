import Container from '../../components/container';
import Habilidade from '../../components/habilidade';
import { habilidades } from '../../utils/content/habilidades';
import Perfil from './../../assets/perfil.jfif';

export default function Sobre() {
  return (
    <Container>
      <div className="flex flex-col    lg:flex-row justify-between mt-10 ">
        <div className="space-y-6 w-full">
          <div>
            <p className="text-4xl font-medium">Olá, meu nome é</p>
            <p className="  sm:text-6xl text-6xl md:text-7xl font-bold  mt-2" style={{ fontFamily: "Roboto Flex" }}>
              Danielly Marques
            </p>
            <p
  className="break-words text-2xl sm:text-2xl md:text-3xl w-4/5 md:w-2/3 mt-2"
  style={{ fontFamily: 'TTSupermolot-Regular' }}
>
  Sou trainee de desenvolvimento de software na DBServer
</p>
          </div>

          <div className="mt-7">
            <h2 className="text-4xl font-semibold mb-2">Sobre mim</h2>

            <p className="text-base sm:text-[15px]  md:text-lg text-[#292929] " style={{ fontFamily: "Roboto Flex" }}>
              Minha jornada na tecnologia começou em 2023, quando iniciei meus estudos em desenvolvimento front-end e descobri uma verdadeira paixão pelo mundo da programação. Antes disso, eu estava em um caminho completamente diferente: cursava Enfermagem na UFV, uma experiência que contribuiu fortemente para o desenvolvimento de soft skills como empatia, cooperação  e relacionamento interpessoal.
              <p className='mt-3'>
                Hoje, atuo como trainee em desenvolvimento Full Stack, criando sistemas web e APIs com tecnologias como Java, Spring Boot, TypeScript, React e Docker, além da aplicação de testes unitários e de integração. Estou sempre em busca de evolução técnica e de contribuir com o crescimento de equipes e projetos por onde passo.
              </p>
            </p>

          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="hidden sm:hidden md:flex md:justify-center md:items-start">
            <img
              src={Perfil}
              alt="Foto"
              className="h-[300px] w-[300px] rounded-md"
            />
          </div>

          <div className="mt-10 md:w-1/3 w-full sm:w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center">Habilidades</h2>

            {Object.entries(habilidades).map(([categoria, lista]) => (
              <div key={categoria} className="mb-6">
                <h3 className="font-bold mb-2">{categoria}</h3>
                <div
                  className="space-y-2 font-light "
                  style={{ fontFamily: 'Roboto Flex' }}
                >
                  {lista.map((habilidade) => (
                    <Habilidade key={habilidade.titulo} {...habilidade} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

import Container from '../../components/container';
import Habilidade from '../../components/habilidade';
import { habilidades } from '../../utils/content/habilidades';
import Perfil from './../../assets/perfil.jfif';

export default function Sobre() {
  return (
    <Container>
      <div className="flex flex-col    lg:flex-row justify-between mt-10 ">
        {/* Texto principal */}
        <div className="space-y-6 w-full">
          <div>
            <p className="text-4xl font-medium">Olá, meu nome é</p>
            <p className="text-7xl font-bold  mt-2" style={{ fontFamily: "Roboto Flex" }}>
              Danielly Marques
            </p>
            <p
              className="text-3xl w-2/3 mt-2"
              style={{ fontFamily: 'TTSupermolot-Regular' }}
            >
              Sou trainee de desenvolvimento de software na DBServer
            </p>
          </div>

          <div className="mt-28">
            <h2 className="text-4xl font-semibold mb-2">Sobre mim</h2>
            <p className="text-lg text-[#292929] w-3/5" style={{fontFamily:"Roboto Flex"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna,
              euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus
              sed, accumsan luctus dui.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex justify-center items-start">
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

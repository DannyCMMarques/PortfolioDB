import CardProjeto from "../../components/cardsProjetos"
import Container from "../../components/container"
import { projetos } from "../../utils/content/projetos"

const Projetos = () => {
  return (
    <Container>
      <div className="mt-10">
        <p className="text-4xl font-medium">Meus</p>
        <p className="text-7xl font-bold  mt-2" style={{ fontFamily: "Roboto Flex" }}>
          Projetos
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-7 px-4 mt-5">
        {projetos.map((projeto) => (
          <CardProjeto key={projeto.titulo} {...projeto} />
        ))}
      </div>


    </Container>
  )
}

export default Projetos
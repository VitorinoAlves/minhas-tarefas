import BarraLateral from './containers/BarraLateral'
import ListaDetarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <BarraLateral></BarraLateral>
        <ListaDetarefas></ListaDetarefas>
      </Container>
    </>
  )
}

export default App

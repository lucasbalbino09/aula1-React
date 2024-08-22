
import './App.css';
import Produtos from './components/Products';
import { Container, Card, Imagens, Titulo, Descricao } from './components/compontes'


function App() {
  return (
    <Container>
        {Produtos.map(produto => (
          <Card key={produto.id}>
          <Imagens src={produto.imageUrl}/>
          <Titulo>{produto.title}</Titulo>
          <Descricao>{produto.description}</Descricao>          
          </Card>
        ))}      
    </Container>
  );
}

export default App;

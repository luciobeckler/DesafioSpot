import ImageHolder from './components/ImageHolder/'
import './App.css';

function App() {
  return (
    <div className="App">
      <ImageHolder src={'/imagens/web/primeiroBanner.png'} alt={'O plano ideal para cuidar da sua saúde em Belo Horizonte'}></ImageHolder>
      <ImageHolder src={'/imagens/web/segundoBanner.png'} alt={'Quem somos?'}></ImageHolder>
      <ImageHolder src={'/imagens/web/terceiroBanner.png'} alt={'Opções abrangentes para cuidar da sua saúde!'}></ImageHolder>
      <ImageHolder src={'/imagens/web/quartoBanner.png'} alt={'Por que escolher a ideal planos de saúde?'}></ImageHolder>
      <ImageHolder src={'/imagens/web/quintoBanner.png'} alt={'Entre em contato'}></ImageHolder>

    </div>
  );
}

export default App;

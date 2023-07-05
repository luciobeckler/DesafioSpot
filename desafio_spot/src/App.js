import ImageHolder from './components/ImageHolder/'
import './App.css';

function App() {
  return (
    <div className="App">
      <ImageHolder
        urlMobile={'/imagens/mobile/primeiroBanner.png'}
        urlWeb={'/imagens/web/primeiroBanner.png'}
        alt={'O plano ideal para cuidar da sua saúde em Belo Horizonte'}>
      </ImageHolder>

      <ImageHolder
        urlMobile={'/imagens/mobile/segundoBanner.png'}
        urlWeb={'/imagens/web/segundoBanner.png'}
        alt={'Quem somos?'}>
      </ImageHolder>

      <ImageHolder
        urlMobile={'/imagens/mobile/terceiroBanner.png'}
        urlWeb={'/imagens/web/terceiroBanner.png'}
        alt={'Opções abrangentes para cuidar da sua saúde!'}>
      </ImageHolder>

      <ImageHolder
        urlMobile={'/imagens/mobile/quartoBanner.png'}
        urlWeb={'/imagens/web/quartoBanner.png'}
        alt={'Por que escolher a ideal planos de saúde?'}>
      </ImageHolder>

      <ImageHolder
        urlMobile={'/imagens/mobile/quintoBanner.png'}
        urlWeb={'/imagens/web/quintoBanner.png'}
        alt={'Entre em contato'}>
      </ImageHolder>


    </div>
  );
}

export default App;

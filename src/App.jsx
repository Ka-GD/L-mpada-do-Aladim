import genio from './assets/genio.png';
import lampadaImg from './assets/lampada.png';
import { useState } from 'react'; // Primeiro passo importar
import './assets/app.scss';

export default function App() {

  
  const [imagemAtual, setImagemAtual] = useState(lampadaImg);

  // Função para mudar a imagem
  const mudarImagem = () => {
    setImagemAtual(genio); 
  };

  return (
    <main>
      <p>"Liberte a magia da programação com a lâmpada de Aladim."</p>
      < img src={imagemAtual} alt="Imagem da lâmpada ou do gênio" />
      <button onClick={mudarImagem}>Clique aqui</button>
    </main>
  );
}

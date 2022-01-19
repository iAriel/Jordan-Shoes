import './App.css';

import Banner from '../src/components/banner'
import data from './data.js'

function App() {
  return (
    <div className="App">
      <div className="header">
        <p className="promotionInfo">Ganhe R$ 10,00 de desconto no frete</p>
        <p className="siteName">JordanShoes</p>
      </div>
      <Banner />
      <div className="content">
        <p className="highlights">Destaques</p>
        <p className="descriptionProducts">Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.</p>
      </div>

      <div className="cards">
      {data.map(Data =>{
        return(
            <div className="products">
          <img 
            key={Data.id}
            src={Data.Image} 
            alt="kkkkk"
          />
        </div>
        )
      })}
        
      </div>
    </div>
  );
}

export default App;

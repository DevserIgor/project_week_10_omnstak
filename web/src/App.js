import React, { useEffect, useState } from 'react';
//componete:bloco isolado de HTML, CSS E JS, O QUAL NÃO INTERFERE NO RESTANTE DA APLICAÇÃO
//propriedade: informações que um componente Pai passa para um filho
//estado: informações mantidas pelo componente (Lembrar: imutablidade)
import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>{        
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);
  
  return (

    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required  
                value={latitude} 
                onChange={e => setLatitude(e.target.value)} 
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)} 
              />
            </div>
          </div>

          <button type="submit" >Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50743713?s=460&v=4" alt="Devserigor"/>
              <div className="user-info">
                  <strong>Igor Silva </strong>
                  <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Programador Junior, apaixonado tecnologias modernas e robustas, amo empreendedorismo</p>
            <a href="https://github.com/DevserIgor?">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50743713?s=460&v=4" alt="Devserigor"/>
              <div className="user-info">
                  <strong>Igor Silva </strong>
                  <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Programador Junior, apaixonado tecnologias modernas e robustas, amo empreendedorismo</p>
            <a href="https://github.com/DevserIgor?">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50743713?s=460&v=4" alt="Devserigor"/>
              <div className="user-info">
                  <strong>Igor Silva </strong>
                  <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Programador Junior, apaixonado tecnologias modernas e robustas, amo empreendedorismo</p>
            <a href="https://github.com/DevserIgor?">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50743713?s=460&v=4" alt="Devserigor"/>
              <div className="user-info">
                  <strong>Igor Silva </strong>
                  <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Programador Junior, apaixonado tecnologias modernas e robustas, amo empreendedorismo</p>
            <a href="https://github.com/DevserIgor?">Acessar perfil no Github</a>
          </li>

        </ul>
      </main>
    </div>
  );
}



export default App;

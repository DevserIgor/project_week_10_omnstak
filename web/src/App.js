import React, { useEffect, useState } from 'react';
import api from './services/api';
//componete:bloco isolado de HTML, CSS E JS, O QUAL NÃO INTERFERE NO RESTANTE DA APLICAÇÃO
//propriedade: informações que um componente Pai passa para um filho
//estado: informações mantidas pelo componente (Lembrar: imutablidade)
import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []);


  async function handleAddDev(data) {
    const response = await api.post('/devs', data)
   

    setDevs([...devs, response.data]);
  }
  return (

    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}



export default App;

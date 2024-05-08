import { useState } from 'react';
import { FiSearch  } from 'react-icons/fi';
import {  } from './styles.css';
import { IoHandLeft } from 'react-icons/io5';

function App() {

  const [input, setInput] = useState('')

  function handleSearch (){
    alert(input)
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador CEP </h1>

    <div className="containerInput">
      <input type="text"
      placeholder="Digite seu CEP ..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <button className="ButtonSearch" onClick={handleSearch}>
        <FiSearch size={25} color='#FFF'/>
      </button>
    </div>

    <main className='main'>
      <h2>CEP: 04476490</h2>

        <span>Rua Estrada Agua Santa</span>
        <span>Complemento: BL Apto 32</span>
        <span>Bairro: Eldorado</span>
        <span>São Paulo - SP</span>
      

    </main>

    </div>
  );
}

export default App;

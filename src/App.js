import React from 'react';
//el import permite usar el componente que se exporta en el archivo BaseColaboradores
import { BaseColaboradores } from './BaseColaboradores';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Listado from './components/Listado';
import Main from './components/Main';




function App() {


//useState que me permita guardar la lista de colaboradores
const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
//useState para guardar el valor del input del buscador del navbar
const [valorBuscador, setValorBuscador] = useState("");


  return (
    <div className="App">
      <Navbar valorBuscador={valorBuscador} setValorBuscador={setValorBuscador} listaColaboradores={listaColaboradores} setListaColaboradores={setListaColaboradores}/>
      <Main setListaColaboradores={setListaColaboradores} listaColaboradores={listaColaboradores}/>
      <Listado listaColaboradores={listaColaboradores} valorBuscador={valorBuscador} setListaColaboradores={setListaColaboradores}/>
      
    </div>
  );
}

export default App;

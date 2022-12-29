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


  return (
    <div className="App">
      <Navbar />
      <Main setListaColaboradores={setListaColaboradores} listaColaboradores={listaColaboradores}/>
      <Listado listaColaboradores={listaColaboradores} />
      
    </div>
  );
}

export default App;

import React from 'react'

const Navbar = (props) => {

       //funcion de captura del valor del input del buscador
         const capturaBuscador = (e) => {
                //captura el valor del input
                props.setValorBuscador(e.target.value)
                console.log(props.valorBuscador)


         }

    


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <h3>Buscador de colaboradores</h3>

        {/* Input de colaboradores a la derecha que de el valor para la condición de filter */}
        <input type="text" placeholder="Buscar colaborador" onChange={capturaBuscador}/>
        </nav>
    </div>
  )
}

export default Navbar

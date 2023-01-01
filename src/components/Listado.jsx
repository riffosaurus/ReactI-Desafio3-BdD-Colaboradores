import React from 'react'

const Listado = (props) => {



  return (
    <div>
        <h2>Listado de colaboradores</h2>
        {/* Listado que se actualice desde el arreglo actualizado de colaboradores segun condicion de busqueda en el navbar */}
    <ul>
        {

//if props.valorBuscador esta vacio, muestra la lista de colaboradores completa
//if props.valorBuscador no esta vacio, muestra la lista de colaboradores filtrada por el valor del buscador, tambien depura la lista de colaboradores para quitarle los espacios en blanco y lo pasa a minusculas
props.valorBuscador === '' ?
        // props.listaColaboradores
        props.listaColaboradores.map((colaborador, index) => {
            return <li key={index}>{colaborador.nombre} - {colaborador.correo}</li>
        })
        :
        //depura la lista de colaboradores para quitarle los espacios en blanco y lo pasa a minusculas
        props.listaColaboradores.filter(colaborador => colaborador.nombre.trim().toLowerCase().includes(props.valorBuscador)).map((colaborador, index) => {
            return <li key={index}>{colaborador.nombre} - {colaborador.correo}</li>
        })
        }
       

      
        
    </ul>
    
    </div>
  )
}

export default Listado
import React from 'react'

const Listado = (props) => {





  return (
    <div>
        <h2>Listado de colaboradores</h2>
        {/* Listado que se actualice desde el arreglo actualizado de colaboradores segun condicion de busqueda en el navbar */}
    <ul>
        {
        // props.listaColaboradores
        
        
        props.listaColaboradores.map((colaborador, index) => {
            return <li key={index}>{colaborador.nombre} - {colaborador.correo}</li>
        })}
        
    </ul>
    
    </div>
  )
}

export default Listado
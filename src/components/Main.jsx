import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


//Componente principal que contiene el formulario de busqueda y el listado de colaboradores a traves de props
const Main = (props) => {

//Crea un estado para el nombre del colaborador
const [nombreColaborador, setNombreColaborador] = useState()
// Crea un estado para el email del colaborador
const [emailColaborador, setEmailColaborador] = useState()
    



  //funcion al enviar el formulario
  const enviarFormulario = (e) => {
    //evita que se recargue la pagina
      e.preventDefault();
      //agregamos nuevo colaborador al arreglo
      props.setListaColaboradores([...props.listaColaboradores, { nombre: nombreColaborador, correo: emailColaborador,}])
      //un console.log para chequear ;)
      console.log(props.listaColaboradores)
      //limpiamos el input, vaciamos el estado
        setNombreColaborador('')
        setEmailColaborador('')
  }

  //funcion al escribir en el input del formulario
  const capturaInputNombre = (e) => {
   setNombreColaborador(e.target.value)
  }
  const capturaInputCorreo = (e) => {
    setEmailColaborador(e.target.value)
  }

  





  return (
    <div>
        {/* dos inputs y botoón de búsqueda */}
        {/* boton de bootstrap */}
<form onSubmit={enviarFormulario}>
        <input type="text" placeholder="Nombre del colaborador"  onChange={capturaInputNombre} />
        <input type="text" placeholder="Email del colaborador"  onChange={capturaInputCorreo} />
 
        <Button variant="primary" type='submit'>Agregar colaborador</Button>
        </form>
    </div>
  )
}

export default Main
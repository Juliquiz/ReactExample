import React, {useState} from 'react';

export const PrimerComponente = () => {
  
    //let nombre = "julian";
    let web = "https://github.com/Juliquiz";

    const [nombre, setNombre] = useState("Julian");
  
    let cursos = [
        "Master en html",
        "Master en React",
        "Master en CSS",
        "Master en Javascript"
    ];

const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
}
    return (
    <div>
        <h1>Mi primer componente</h1>
        <p>Este es un texto en mi componente</p>
        <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi web es: {web}</p>

        <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder=''/>

<button onClick={e => {
    console.log("El valor guardado en tu estado es:", nombre);
}}>Mostrar valor de estado</button>

<button onClick={ e => cambiarNombre("JULIAN QUIROZ WEB")}>Cambiar nombre</button>

        <h2>Cursos</h2>
        <ul>
            {
                cursos.map( (curso, indice) => {
                    return (<li key={indice}>
                        {curso}
                    </li>);
                })
            }
        </ul>
    </div>
  )
}

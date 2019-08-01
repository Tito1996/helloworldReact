import React from 'react';
import './app.css';
import Header from './header';

const App = () => {
    
    const mensaje = "Bienvenidos, hijos del rock'n roll"
    const mensaje2 = () => {
        return "Esto es muy gracioso"
    }
    const getTime = () => {
        return (new Date()).toLocaleTimeString()
    }

    return (
        <div className="app"> 
            <Header mensaje="hola mundo" estilos={{color: "blue"}}></Header>
            <h1>
                Hello <em style={{color: "green"}}>Almondigas</em>
            </h1>
            <div>
                 <h2>
                    {mensaje}     
                </h2>
                <h3>
                    {mensaje2()} 
                    {/* sin () llamas a la funcion, no al valor */}
                </h3>
                <p> {getTime()} </p>
            </div>
        </div>
    )
}

export default App;
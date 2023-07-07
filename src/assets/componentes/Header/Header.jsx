import { useState } from 'preact/hooks';
import React from 'react';

const Header = () => {

    const [mostrarMenu, setMostrarMenu] = useState(false)

    return(
        <header>
            <img className="logo" src="images/logo.svg" alt="" />
            <nav className={mostrarMenu ? "mostrar" : ""}>
                <div className='btnCerrarMenu'><a href='javascript:void(0)' onClick={() => setMostrarMenu(false)}>X</a></div>
                <a href="">Inicio</a>
                <a href="#servicios">Servicios</a>
                <a href="#capacitaciones">Capacitaciones</a>
                <a href="#resumen">Resumen</a>
                <a href="#contacto">Contacto</a>
            </nav>
            <i className="bi bi-list menu menuMobile" onClick={() => setMostrarMenu(true)}></i>
            <button><span class="soloMobile"><i class="bi bi-download"></i></span><span class="ocultarMobile">Descargar</span> CV</button>
        </header>
    )
}

export { Header }

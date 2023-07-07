import React from 'react';

const Capacitaciones = () => {
    return(
        <section className="capacitaciones" id="capacitaciones">
            <h3 className="textoDestacado">CAPACITACIONES</h3>
            <h1 className="tituloPrincipal">Realizadas recientemente</h1>
            <div className="contenidoCapacitaciones">
                <img src="images/html_css.jpg" alt="" />
                <img src="images/asp.jpg" alt="" />
                <img src="images/agiles.jpg" alt="" />
                <img src="images/git.png" alt="" />
                <img src="images/sqlserver.jpg" alt="" />
                <img src="images/bubble.png" alt="" />
            </div>
            <button>Ver más <i class="bi bi-arrow-right-short"></i></button>
        </section>
    )
}

export { Capacitaciones }

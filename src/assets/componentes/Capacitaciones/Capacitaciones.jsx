import React from 'react';

const Capacitaciones = () => {
    return(
        <section className="capacitaciones" id="capacitaciones">
            <h3 className="textoDestacado">CAPACITACIONES</h3>
            <h1 className="tituloPrincipal">Realizadas recientemente</h1>
            <div className="contenidoCapacitaciones">
                <img src="../public/images/html_css.jpg" alt="" />
                <img src="../public/images/asp.jpg" alt="" />
                <img src="../public/images/agiles.jpg" alt="" />
                <img src="../public/images/git.png" alt="" />
                <img src="../public/images/sqlserver.jpg" alt="" />
                <img src="../public/images/bubble.png" alt="" />
            </div>
            <button>Ver más <i class="bi bi-arrow-right-short"></i></button>
        </section>
    )
}

export { Capacitaciones }
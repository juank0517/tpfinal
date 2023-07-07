import React from 'react';

const Resumen = () => {
    return(
        <section className="miResumen" id="resumen">
            <h3 className="textoDestacado">Años de Experiencia</h3>
            <h1 className="tituloPrincipal">Mi resumen</h1>
            <div className="resumen">
                <div className="experienciaLaboral">
                    <h2>Experiencia laboral</h2>
                    <h4 className="fecha">2013 - 2023</h4>
                    <div className="linea"></div>
                    <div className="tiempo">
                        <h2>Administrativo</h2>
                        <h4>Sanatorio Adventista del Plata, 2013</h4>
                        <p>
                            Trabajé durante cinco años en el turno noche, donde desarrolle tareas administrativas como codificar estudios en el sector de la emergencia, cobros y gestión de historía clínica.
                        </p>
                    </div>
                    <div className="linea"></div>
                    <div className="tiempo">
                        <h2>Programador Web Full Stack</h2>
                        <h4>Sanatorio Adventista del Plata, 2018</h4>
                        <p>
                            Hace cinco años que llevo trabajando en el área de programación, me dedico especialmente al desarrollo de aplicaciones Web, tanto el back end como el front end. 
                        </p>
                    </div>
                </div>
                <div className="resumenConocimientos">
                    <h2>Capacitaciones</h2>
                    <h4 className="fecha">2013 - 2023</h4>
                    <div className="linea"></div>
                    <div className="tiempo">
                        <h2>ASP.NET</h2>
                        <h4>UTN, 2022</h4>
                        <p>
                            Aprendí a crear aplicaciones web con C# desde cero, entendiendo desde los conceptos básicos hasta los mas avanzados, usando Entity FrameWork para conectarnos y realizar operaciones con una base de datos.
                        </p>
                    </div>
                    <div className="linea"></div>
                    <div className="tiempo">
                        <h2>Professional Front End Developer</h2>
                        <h4>UTN, 2023</h4>
                        <p>
                            Conocimiento de React hasta un nivel competitivo en el ambiente laboral de hoy en día. Este curso está construido 100% en Hooks y functional components.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Resumen }

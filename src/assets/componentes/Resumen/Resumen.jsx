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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, qui minus. Laboriosam temporibus, dolore officia labore eum quia commodi earum laudantium consectetur minima laborum placeat. Temporibus laborum quam soluta odit?
                        </p>
                    </div>
                    <div className="linea"></div>
                    <div className="tiempo">
                        <h2>Programador Web Full Stack</h2>
                        <h4>Sanatorio Adventista del Plata, 2018</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, qui minus. Laboriosam temporibus, dolore officia labore eum quia commodi earum laudantium consectetur minima laborum placeat. Temporibus laborum quam soluta odit?
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, qui minus. Laboriosam temporibus, dolore officia labore eum quia commodi earum laudantium consectetur minima laborum placeat. Temporibus laborum quam soluta odit?
                        </p>
                    </div>
                    <div className="linea"></div>
                    <div className="tiempo">
                        <h2>Professional Front End Developer</h2>
                        <h4>UTN, 2023</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, qui minus. Laboriosam temporibus, dolore officia labore eum quia commodi earum laudantium consectetur minima laborum placeat. Temporibus laborum quam soluta odit?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Resumen }
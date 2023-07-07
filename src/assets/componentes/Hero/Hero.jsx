import React from 'react';

const Hero = () => {
    return(
        <section className="hero">
            <div className="ladoIzquierdo">
                <h2>Hola, <span className="textoDestacado">soy</span></h2>
                <h1 className="tituloPrincipal">Juan Carlos Frutos</h1>
                <h1>Programador Web Full Stack</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit, voluptatibus vitae aspernatur asperiores ducimus odit nulla quasi in doloremque libero obcaecati ea quaerat aliquid dicta eum, eaque distinctio accusamus!</p>
                <h4>ENCUENTRAME EN</h4>
                <div className="redes">
                    <a href="https://www.facebook.com/juank0517" target="_blank"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-linkedin"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                </div>
                <div className="informacionAdicionalHero">
                    <div className="columnaInfo">
                        <h3>10+</h3>
                        <label>Años de Experiencia</label>
                    </div>
                    <div className="columnaInfo">
                        <h3>1+</h3>
                        <label>Premios</label>
                    </div>
                    <div className="columnaInfo">
                        <h3>5+</h3>
                        <label>Certificaciones</label>
                    </div>
                </div>
            </div>
            <div className="ladoDerecho">
                <div className="contenidoImagenDerecha">
                    <div className="cuadroFondo"></div>
                    <img className="miFoto" src="images/mi-imagen.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export { Hero }

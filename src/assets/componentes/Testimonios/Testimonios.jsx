import React from 'react';

const Testimonios = () => {
    return(
        <section class="clientesDicen">
            <h3 class="textoDestacado">Testimonios</h3>
            <h1 class="tituloPrincipal">Los clientes dicen</h1>
            <div class="testimonios">
                <div class="testimonio">
                    <div class="calificacion">
                        <i class="bi bi-quote"></i>
                        <div>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <p>Ha asumido una gran responsabilidad para el equipo y has ayudado a formar a nuestros nuevos compañeros con la máxima dedicación y compromiso.</p>
                    <div class="usuario">
                        <img src="images/usuario-sin-foto.png" alt="" />
                        <div class="informacionUsuario">
                            <h4>Hugo Hardy</h4>
                            <label>Ingeniero en Sistemas</label>
                        </div>
                    </div>
                </div>
                <div class="testimonio">
                    <div class="calificacion">
                        <i class="bi bi-quote"></i>
                        <div>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <p>Se esfuerza por abordar los desacuerdos y encontrar resoluciones aceptables para todos los miembros y partes interesadas.</p>
                    <div class="usuario">
                        <img src="images/usuario-sin-foto.png" alt="" />
                        <div class="informacionUsuario">
                            <h4>Daniel Manucci</h4>
                            <label>Licenciado en Sistemas</label>
                        </div>
                    </div>
                </div>
                <div class="testimonio">
                    <div class="calificacion">
                        <i class="bi bi-quote"></i>
                        <div>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <p>Es evidente que te gusta tu trabajo y eso se refleja en la calidad de tus entregas. Agradecemos sinceramente que formes parte de nuestro equipo</p>
                    <div class="usuario">
                        <img src="images/usuario-sin-foto.png" alt="" />
                        <div class="informacionUsuario">
                            <h4>Hector Acosta</h4>
                            <label>Tester</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="masTestimonios">
                <i class="bi bi-circle-fill marcado"></i>
                <i class="bi bi-circle"></i>
                <i class="bi bi-circle"></i>
            </div>
        </section>
    )
}

export { Testimonios }

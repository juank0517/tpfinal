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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam assumenda aliquam iste error quo sint maxime doloribus, ex deserunt numquam fugit suscipit, magnam neque nisi quaerat voluptatibus soluta. Voluptas, repudiandae?</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam assumenda aliquam iste error quo sint maxime doloribus, ex deserunt numquam fugit suscipit, magnam neque nisi quaerat voluptatibus soluta. Voluptas, repudiandae?</p>
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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam assumenda aliquam iste error quo sint maxime doloribus, ex deserunt numquam fugit suscipit, magnam neque nisi quaerat voluptatibus soluta. Voluptas, repudiandae?</p>
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
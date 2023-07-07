import { useState } from 'preact/hooks';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {

    const [enviado, setEnviado] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_71wjsyj', 'template_aranstn', form.current, 'EDXaKiSkMroj2BwJF')
          .then((result) => {
            setEnviado(true)
          }, (error) => {
            setEnviado(false)
          });
      };

    return(
        <section className="contacto" id="contacto">
            <h3 className="textoDestacado">Contacto</h3>
            <h1 className="tituloPrincipal">Contáctese conmigo</h1>
            <div className="contenidoContacto">
                <div className="informacionContacto">
                    <div className="filaContacto recuadro">
                        <i className="bi bi-geo-alt"></i>
                        <label>Libertador San Martin, Entre Rios</label>
                    </div>
                    <div class="filaContacto recuadro">
                        <i class="bi bi-telephone"></i>
                        <label>+54 343 5078781</label>
                    </div>
                    <div class="filaContacto recuadro">
                        <i class="bi bi-envelope-at"></i>
                        <label>juank0517@gmail.com</label>
                    </div>
                    <div class="filaContacto recuadro">
                        <i class="bi bi-globe"></i>
                        <label>Lorem ipsum, dolor sit amet</label>
                    </div>
                </div>
                <form class="recuadro" ref={form} onSubmit={sendEmail}>
                    <div class="filaFormulario">
                        <input type="text" placeholder="Nombre Completo" name='to_name' min="3" required />
                        <input type="number" name='phone' placeholder="Teléfono" minLength="10" required />
                    </div>
                    <div class="filaFormulario">
                        <input type="email" name='mail' placeholder="Email" required />
                        <input type="text" name='asunto' placeholder="Asunto" required />
                    </div>
                    <textarea class="filaFormulario" name='message' min='5' required></textarea>
                    { !enviado ? <button type='submit'>Enviar Mensaje <i class="bi bi-send"></i></button> : <div className='enviadoConExito'>ENVIADO</div>}
                </form>
            </div>
        </section>
    )
}

export { Contacto }

import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Header } from './assets/componentes/Header/Header'
import { Hero } from './assets/componentes/Hero/Hero'
import { Servicios } from './assets/componentes/Servicios/Servicios'
import { Capacitaciones } from './assets/componentes/Capacitaciones/Capacitaciones'
import { Resumen } from './assets/componentes/Resumen/Resumen'
import { Testimonios } from './assets/componentes/Testimonios/Testimonios'
import { Contacto } from './assets/componentes/Contacto/Contacto'
import { Footer } from './assets/componentes/Footer/Footer'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='fondoMenuMobile'></div>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Capacitaciones />
        <Resumen />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

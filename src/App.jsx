import { useState } from 'react'
import styled from '@emotion/styled'
import img from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
function App() {
const Heading =styled.h1`
    color:white;
    font-size: 2rem;
   margin-top: 4rem;
   text-align:center;
   font-weight: 700;
   text-transform:capitalize;
`
const Imagen = styled.img`
  max-width:40rem;
  margin: 0 auto 0 auto;
  display:block;
  width: 90%;
` 
const Contenedor = styled.div`
  @media (min-width: 996px) {
    display:grid;
    grid-template-columns: 50% 50%;
    grid-gap: 2rem;
  }
  max-width: 68rem;
  width: 90%;
  margin:0 auto;
  margin-top: 1rem
  `   
  return (
    <Contenedor>
      <Imagen src={img}>
      </Imagen>
      <div className='mt-5 font-light'>
        <Heading>Cotiza Criptomonedas desde el Instante</Heading>
        <Formulario/>
      </div>
    </Contenedor>
  )
}

export default App

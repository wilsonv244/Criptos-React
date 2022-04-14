import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import img from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Spink from './components/Spink'
import DatosCripto from './components/DatosCripto'
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
  const [wait,setWait] = useState(false)
  const [datosC,setDatosCripto] = useState({})
  const [cotizar, setCotizar] = useState({})
  useEffect(() => {
    if(Object.keys(cotizar).length>0){
      const consultarApi = async()=>{
        setWait(true);
        setDatosCripto({})
        console.log(cotizar)
        const api = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cotizar.valor}&tsyms=${cotizar.estado},EUR`;
        const consultar = await fetch(api);
        const resultado = await consultar.json();
        console.log(resultado.DISPLAY[cotizar.valor][cotizar.estado])
        setDatosCripto(resultado.DISPLAY[cotizar.valor][cotizar.estado])
        setWait(false);
      }
      consultarApi()
      console.log(datosC.length)
    }

  }, [cotizar])
  return (
    <Contenedor>
      <Imagen src={img}>
      </Imagen>
      <div className='mt-5 font-light'>
        <Heading>Cotiza Criptomonedas desde el Instante</Heading>
        <Formulario
          setCotizar={setCotizar}
        />
        {wait?
          <Spink/>
          :
          ""

        }
        {datosC.TOSYMBOL?
          <DatosCripto
            datosC={datosC}
          />
          :
          ""
        }
      </div>
    </Contenedor>
  )
}

export default App

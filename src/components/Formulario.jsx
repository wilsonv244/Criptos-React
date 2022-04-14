import React from 'react'
import { useState,useEffect } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import {monedas, personas} from '../hooks/monedas'
import Error from './Error'
import useSelectCriptos from '../hooks/useSelectCriptos'
const Formulario = ({setCotizar}) => {
    useEffect(() => {
        const consultarApi=async() =>{
        try {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const resultado = await fetch(url);
            const respuesta = await resultado.json();
            const arreglosCriptos =respuesta.Data.map(e=>{
                const criptos ={
                    id: e.CoinInfo.Name,
                    valor: e.CoinInfo.FullName
                }
                return criptos
            })
            console.log(arreglosCriptos)
            setCriptos(arreglosCriptos)
        } catch (error) {
            console.log("error")   
        }
        }
        consultarApi()
        
    }, [])
    const [error, setError] =useState(false)
    const [criptos, setCriptos] = useState([])
    const [estado, SeleccionarMonedas ] = useSelectMonedas('Elige tu moneda',monedas)
    const [valor,SelectCriptos] = useSelectMonedas('Seleccione tu cripto',criptos)

    const sendSubmit =(e)=>{
        e.preventDefault();
        if ([estado,valor].includes('')) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
            return;
        }
        setError(false)
        const valores={
            estado,valor
        }
        setCotizar(valores)
    }

  return (
    <>
        <form action="" className='text-center bg-red-100 shadow-xl p-7 rounded-xl' onSubmit={sendSubmit}>
            {error ? 
            <Error
                mensaje="Ingrese todos los campos"
            /> 
            : ""

            }
            <SeleccionarMonedas />
            <SelectCriptos/>
        <button type='submit' className='p-3 mt-6 text-white bg-red-500 rounded-md w-full'>Cotizar</button>
        </form>
    </>

  )
}

export default Formulario
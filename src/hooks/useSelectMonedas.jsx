import React from 'react'
import { useState } from 'react'
export const useSelectMonedas = (label,opciones) => {
   const [state,setState] = useState('')
   const SelectMonedas = ()=>(
      <>
         <p className='font-bold text-left uppercase mb-5 mt-2'>{label}</p>
         <select value={state} onChange={e=>setState(e.target.value)} className='p-2 w-full text-center rounded-xl'>
            <option value="">Seleccione un Valor</option>
            {
               opciones.map(e=>(

                  <option 
                     value={e.id}
                     key={e.id}
                  >{e.valor}</option>
               ))
            }
         </select>
      </>

   )
  return [state,SelectMonedas]
}
export default useSelectMonedas

import React from 'react'

export const useSelectCriptos = (label,opciones) => {
   const SelectCriptos=()=>(
      <>
      <p className='font-bold text-left uppercase mb-5'>{label}</p>
         <select  onChange={e=>setState(e.target.value)} className='p-2 w-full text-center rounded-xl'>
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
  return [SelectCriptos]
}
export default useSelectCriptos

import React from 'react'

const Formulario = () => {
  return (
    <>
        <h2 className='mt-5 mb-4 text-xl font-bold text-center text-white uppercase border'>Formulario</h2>
        <form action="" className='text-center bg-red-100 shadow-xl p-7 rounded-xl'>
            <div className='flex justify-between w-full'>
                <label htmlFor="" className='text-lg font-light uppercase' >Ingrese moneda</label>
                <select name="moneda" id="moneda" className='p-2 font-bold'>
                    <option value="1">Seleccione un opcion</option>
                    <option value="1">Seleccione un opcion</option>
                    <option value="1">Seleccione un opcion</option>
                    <option value="1">Seleccione un opcion</option>
                </select>
            </div>
            <div className='flex justify-between w-full mt-8'>
                <label htmlFor="" className='text-lg font-light uppercase'>Ingrese moneda</label>
                <select name="moneda" id="moneda" className='p-2 font-bold'>
                    <option value="1">Seleccione un opcion</option>
                </select>
            </div>
        <button type='submit' className='p-3 mt-6 text-white bg-red-500 rounded-md'>Consultar</button>
        </form>
    </>
    
  )
}               

export default Formulario
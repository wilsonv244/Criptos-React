import React from 'react'

export const DatosCripto = ({datosC}) => {
   const {PRICE, HIGHDAY,LOWDAY, CHANGEPCT24HOUR, IMAGEURL,LASTUPDATE} = datosC;
  return (
     <>
         <div className='p-5 mt-5 grid grid-cols-2 items-center'>
            <div>
               <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="IMAGEN REFERENCIAL" />
            </div>
            <div>
               <p className='text-white mb-2'>El precio es de:  <span className='font-bold'>{PRICE}</span> </p>
               <p className='text-white mb-2'>El precio mas alto del día:  <span className='font-bold'>{HIGHDAY}</span> </p>
               <p className='text-white mb-2'>El precio mas bajo del día:   <span className='font-bold'>{LOWDAY}</span> </p>
               <p className='text-white mb-2'>Variacion ultimas 24 horas:   <span className='font-bold'>{CHANGEPCT24HOUR}</span> </p>
               <p className='text-white mb-2'>El último precio: <span className='font-bold'>{LASTUPDATE}</span> </p>
            </div>
         </div>
     </>
     )
}
export default DatosCripto

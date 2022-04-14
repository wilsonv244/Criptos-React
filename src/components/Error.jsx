import React from 'react'

export const Error = ({mensaje}) => {
  return (
     <>
      <p className='text-center font-bold p-3 bg-red-700 text-white rounded-lg uppercase'>{mensaje}</p>
     </>
  )
}
export default Error;
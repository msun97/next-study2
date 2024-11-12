import React from 'react'

const Card = ({ children}) => {
  return (
    <div className='bg-white rounded-2xl p-6 flex'> 
      { children}
    </div>
  )
}

export default Card
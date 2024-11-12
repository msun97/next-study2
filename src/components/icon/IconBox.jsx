import React from 'react'

const IconBox = ({children, className}) => {
      return (
        <div className={`rounded-full flex items-center justify-center ${className}`}>
        {children}
      </div>
      )
    }

export default IconBox
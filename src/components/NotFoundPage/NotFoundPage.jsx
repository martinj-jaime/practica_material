import React, { useEffect } from 'react'

import Seconds from '../Seconds/Seconds'

const NotFoundPage = () => {
  console.log('NotFoundPage render')

    useEffect(() => {
      const timer = setTimeout(function() {
        console.log('redirect')
      }, 10*1000) // 10 seg

      return () => {
        clearTimeout(timer)
      }
    }, [])
  
  return (
    <div>
      <p>NotFoundPage</p>
      <p>Se redirigira en 10 segundos a la pagina principal</p>
      <Seconds />
    </div>
  )
}

export default NotFoundPage
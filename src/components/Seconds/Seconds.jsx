import React, { useState, useEffect } from 'react'

const Seconds = () => {
    console.log('Seconds render')

    const [seconds,setSeconds] = useState()

    let i = 0;

    useEffect(() => {
        const timer2 = setInterval(function () {
            i++;
            console.log(i)
            setSeconds(i)
            if (i === 10) {
                clearInterval(timer2)
            }
        }, 1000) // 1 seg
    }, [i])

    return (
        <div>
            Se redirigira en {seconds} segundos ...
        </div>
    )
}

export default Seconds
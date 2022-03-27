import React, { useEffect, useRef, useState } from 'react'

// import CardSession from '../CardSession/CardSession'
import './SessionCard.css'

const SessionCard = () => {
    console.log('SessionCard render')

    const [render, setRender] = useState(false)

    const countRef = useRef(0);

    const handleClick = () => {
        countRef.current++
        console.log(countRef.current)
    }

    let i = 0;

    useEffect(() => {
        console.log(countRef)
        console.log(render)
        
        const timer = setTimeout(function () {
            console.log('setTimeout')
            document.getElementById('AlertCard').style.display = 'flex';

            const timer2 = setInterval(function() {
                i++;
                console.log(i);
                console.log(countRef)
                console.log(countRef.current)
                if (i === 15 && countRef.current === 0) {
                    console.log('redirect')
                    clearInterval(timer2)
                }
                if (i < 15 && countRef.current!==0) {
                    document.getElementById('AlertCard').style.cssText = `display:none;`
                    clearInterval(timer2)
                    countRef.current=0;
                    setRender(true)
                }
            }, 1*1000) // 15 seg

        }, 1 * 60 * 1000) // 1 min 

        return () => clearTimeout(timer);
    }, [countRef, render, i])

    return (
        <>
            <div id='AlertCard' >
                <p>¿Sigue ahi?</p>
                <p> Se reidrigira si no acepta en ... {i} </p>
                <button onClick={handleClick} >Si</button>
            </div>
        </>
    )
}

export default SessionCard
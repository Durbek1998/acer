// import { set } from 'immer/dist/internal';
import { useEffect, useState } from 'react';
import React from 'react'
import "./Clock.css"
const Clock = () => {
    const [days, setDays] = useState();
    const [hours, setHours]= useState();
    const [menutes, setMenutes] = useState();
    const [seconds, setSeconds] = useState();

    let interval;

    const countDown = () => {
        const destination = new Date('Dec 25 , 2023').getTime()

        interval = setInterval(()=>{
            const now  = new Date().getTime()
            const different = destination - now
            const days = Math.floor(different / (1000 * 60 * 60 * 24));
            const hours = Math.floor(different % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const menutes = Math.floor(different % (1000 * 60  * 24) / (1000 * 60));
            const seconds = Math.floor(different % (1000 * 60 ) / (1000));

            if(destination < 0) clearInterval(interval.current);
            else{
                setDays(days);
                setHours(hours);
                setMenutes(menutes);
                setSeconds(seconds)
            }
        })
    }
    useEffect(()=> {
        countDown()
    })

  return (
    <div className='div'>
        <div className='clock__wrapper d-flex align-items-center gap-1'>
        <div className='clock__data d-flex align-items-center gap-2'>
            <div>
                <h1 className='text-white fs-1'>{days}</h1>
                <h5 className='text-white fs-5'>Days</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className='clock__data d-flex align-items-center gap-3'>
            <div>
                <h1 className='text-white fs-1'>{hours}</h1>
                <h5 className='text-white fs-5'>Hour</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className='clock__data d-flex align-items-center gap-3'>
            <div>
                <h1 className='text-white fs-1'>{menutes}</h1>
                <h5 className='text-white fs-5'>Menute</h5>
            </div>
            <span className='text-white fs-3'>:</span>
        </div>
        <div className='clock__data d-flex align-items-center gap-3'>
            <div>
                <h1 className='text-white fs-1'>{seconds}</h1>
                <h5 className='text-white fs-5'>Secund</h5>
            </div>
            {/* <span className='text-white fs-3'>:</span> */}
        </div>
    </div>
    </div>
  )
}

export default Clock
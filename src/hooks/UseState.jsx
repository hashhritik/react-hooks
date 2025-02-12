import React, { useState } from 'react'

export default function UseState() {

    const [count, setCount] = useState(0)

    return (
        <>

            <button onClick={() => setCount(count + 1)}>Increament :</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>Decreament :</button>


        </>
    )
}
//////////////////////////////////////////////////////////////////////////////////////////

export function Toggle() {
    const [isToggle, setIsToggle] = useState(false)

    const handleToggle=()=>{
        setIsToggle((prev)=>!prev)
    }

    return (
        <div >
          <h1>{isToggle ? 'ON' : 'OFF'}</h1>
    
          <button
            onClick={handleToggle}
            style={{backgroundColor: isToggle ? '#4caf50' : '#f44336'}}
          >
            Toggle
          </button>
        </div>
      );

}



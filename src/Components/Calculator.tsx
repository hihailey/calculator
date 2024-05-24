import React from 'react'

const Calculator = () => {

    const buttons = ['C', '+/-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+','.', '0', '<','=']


  return (


    <>
    <div className=''>

    <p>Result</p>
    <div className='buttonGrid'>
        {buttons.map ((button, index) => {
            return <button key={index}>{button}</button>
        } )}
      </div>    
      
      </div>
    </>
   
  )
}

export default Calculator
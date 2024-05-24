import { useState } from 'react'
import { evaluate } from 'mathjs';

const buttons = ['C', '+/-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+','.', '0', '<','=']


const Calculator = () => {
    const [result, setResult] = useState('0');
    
  const onClickButton = (input: number|string) => {
    console.log(input)
    // If the result is '0', set the new input, otherwise append the new input
    if (typeof input === 'number') {
        if (result === '0') {
            setResult(String(input));
          } else {
            setResult(result + input);
          }
    } else {
        if (input === 'C') {
            setResult('0');
          } else if (input === '=') {
            try {
              const finalValue = evaluate(result);
              setResult(finalValue.toString());
            } catch (error) {
                setResult('Error');
            }
          } else {
            setResult(result + input);
          }

    }
  };

  return (


    <>
    <div className=''>

    <p>{result}</p>
    <div className='buttonGrid'>
        {buttons.map ((button, index) => {
            return <button onClick={()=> onClickButton(button)} key={index}>{button}</button>
        } )}
      </div>    
      
      </div>
    </>
   
  )
}

export default Calculator
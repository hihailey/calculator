import { useState } from 'react'
import { evaluate } from 'mathjs';

const buttons = ['C', '+/-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+','.', '0', '<','=']
const operators = ['+', '-', '*', '/', '%','.'];

const Calculator = () => {
    const [result, setResult] = useState('0');

    const onClickButton = (input: string|number) => {
        if (typeof input === 'number') {
            // If the input is a number
            handleNumberInput(input);
        } else {
            // If the input is a string
            handleStringInput(input);
        }
    };


const handleNumberInput = (input: number) => {
    if (result === '0') {
        setResult(String(input));
    } else if (result.length < 17) {
        // Maximum length for the result
        setResult(result + input);
    }
};

const handleStringInput = (input: string) => {
    // Get the last input of the result
    const lastInput = result[result.length - 1];
    switch (input) {
        case 'C':
            setResult('0');
            break;
        case '=':
            try {
                const finalValue = evaluate(result);
                setResult(finalValue.toString());
            } catch (error) {
                setResult('Error');
            }
            break;
        case '+/-':
            // Toggle the sign of the number
            setResult(String(-1 * parseFloat(result)));
            break;
        case '<':
            // Remove the last character
            if (result.length === 1) {
                setResult('0');
            } else {
                setResult(result.slice(0, -1));
            }
            break;
        default:
            if (result.length >= 17) {
                return;
            }
            if (!operators.includes(lastInput)) {
                setResult(result + input);
            }
            break;
    }
};

  return (
    <>
    <div className='calculatorWrapper'>
    <h1>{result}</h1>
    <div className='buttonGrid'>
        {buttons.map ((input, index) => {
            return <button onClick={()=> onClickButton(input)} key={index}>{input}</button>
        } )}
      </div>
      </div>
    </>
   
  )
}

export default Calculator
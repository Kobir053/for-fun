import React from 'react'

export default function Main() {

    

    const findTheNumber = ()=>{
        // debugger
        if(document.getElementById('firstNumber').value != '' 
        && document.getElementById('secondNumber').value != ''
        && document.getElementById('lastNumber').value != ''){
            let first = Number(document.getElementById('firstNumber').value);
            let second = Number(document.getElementById('secondNumber').value);
            let last = Number(document.getElementById('lastNumber').value);
            let count = 3;
            let temp;
            for(let fibonacci = first + second;fibonacci < last;fibonacci += temp){
                temp = fibonacci - first;
                first = temp;
                count++;
            }
            alert(count);
            return;
        }
        else{ 
            alert('error');
            return;
        }
            
    }
    
    return (
    <div>
        <input type='number' id='firstNumber' className='inputs' placeholder='Enter the first number'/>
        <input type='number' id='secondNumber' className='inputs' placeholder='Enter the second number'/>
        <input type='number' id='lastNumber' className='inputs' placeholder='Enter the last number'/>
        <button id='bu' onClick={()=>{findTheNumber()}}>find</button>
    </div>
  )
}

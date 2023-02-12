import React from 'react';
import { useState } from 'react';
import './pickNumber.css'

export default function PickNumber() {

    const [next,setNext] = useState(false);
    const [divideByThree,setDivideByThree] = useState(false);
    const [divideByTwo,setDivideByTwo] = useState(false);

    const nextStep = ()=>{
        if(next == true){
            return <div className='myDiv'>
                    <h3>Add to your number 20 :</h3>
                    <button onClick={()=>{setDivideByThree(true)}}>Done</button>
                </div>
        }
        else 
            return;
    }

    const divideByThree_Step = ()=>{
        if(divideByThree == true){
            return <div className='myDiv'>
                    <h3>can you divide your number by 3 without remainder?</h3>
                    <button onClick={()=>{}}>Yes</button>
                    <button onClick={()=>{set()}}>No</button>
                </div>
        }
        else 
            return;
    }

    const divideByTwo_Step = ()=>{
        if(divideByTwo == true){
            return <div className='myDiv'>
                    <h3>Then divide it by 2 without remainder</h3>
                    <button onClick={()=>{}}>Done</button>
                    <button onClick={()=>{}}>Can't</button>
                </div>
        }
        else 
            return;
    }

    const set = ()=>{
        setDivideByThree(false);
        setDivideByTwo(true);
        return;
    }

  return (
    <div>
        <div>
            <h1>We can know your brain ;)</h1>
            <h2>Choose a number in your head, that it's between 1 to 10 :</h2>
            <button onClick={()=>{setNext(true)}}>Done</button>
            {nextStep()}
            {divideByThree_Step()}
            {divideByTwo_Step()}
        </div>
    </div>
  )
}

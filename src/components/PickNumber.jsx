import React from 'react';
import { useState } from 'react';
import './pickNumber.css'

export default function PickNumber() {

    const [next,setNext] = useState(false);
    const [divideByThree,setDivideByThree] = useState(false);
    const [divideByTwo,setDivideByTwo] = useState(false);
    const [after_ByThree,setAfter_ByThree] = useState(false);
    const [didnt_ByTwoAfterThree,setDidnt_ByTwoAfterThree] = useState(false);

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
                    <button onClick={()=>{setAfter_ByThree(true)}}>Yes</button>
                    <button onClick={()=>{set(setDivideByThree,setDivideByTwo)}}>No</button>
                </div>
        }
        else 
            return;
    }

    const afterDivideByThree = ()=>{
        if(after_ByThree == true){
            return <div className='myDiv'>
                <h3>So do it!<br/>Now add to your number 4 :</h3>
                <h3>After you did it, Divide your number by 2 without remainder :</h3>
                <button onClick={()=>{setDidnt_ByTwoAfterThree(true)}}>Can't</button>
                <button onClick={()=>{}}>Done</button>
            </div>
        }
        else 
            return;
    }

    const cannot_ByTwo = ()=>{
        if(didnt_ByTwoAfterThree == true){
            return <div className='myDiv'>
                        <h3>Then add 1 to your number, and then divide it by 3 without remainder :</h3>
                        <button onClick={()=>{theNumber(7)}}>Can't divide</button>
                        <button onClick={()=>{theNumber(1)}}>Done</button>
                    </div>
        }
        else 
            return;
    }

    const theNumber = (num)=>{
        alert(`the number you choosed is ${num}`);
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

    const set = (fun1,fun2)=>{
        fun1(false);
        fun2(true);
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
            {afterDivideByThree()}
            {cannot_ByTwo()}
            {divideByTwo_Step()}
        </div>
    </div>
  )
}

import React from 'react';
import { useState } from 'react';
import './pickNumber.css'

export default function PickNumber() {

    const [firstStep,setFirstStep] = useState(true);
    const [next,setNext] = useState(false);
    const [divideByThree,setDivideByThree] = useState(false);
    const [after_ByThree,setAfter_ByThree] = useState(false);
    const [didnt_ByTwoAfterThree,setDidnt_ByTwoAfterThree] = useState(false);
    const [byTwoAfterThree,setByTwoAfterThree] = useState(false);

    const [divideByTwo,setDivideByTwo] = useState(false);
    const [after_ByTwo,setAfter_ByTwo] = useState(false);
    const [didnt_ByFourAfterTwo,setDidnt_ByFourAfterTwo] = useState(false);

    const [devideByEight,setDevideByEight] = useState(false);
    const [didnt_ByEight,setDidnt_ByEight] = useState(false);

    const stepOne = ()=>{
        if(firstStep == true){
            return <div className='myDiv'>
                <h2>Choose a number in your head,<br/> that it's between 1 to 10 :</h2>
                <button className='bu' onClick={()=>{set(setFirstStep,setNext)}}>Done</button>
            </div>
        }
    }

    const nextStep = ()=>{
        if(next == true){
            return <div className='myDiv'>
                    <h3>Add to your number 20 :</h3>
                    <button className='bu' onClick={()=>{set(setNext,setDivideByThree)}}>Done</button>
                </div>
        }
        else 
            return;
    }

    const divideByThree_Step = ()=>{
        if(divideByThree == true){
            return <div className='myDiv'>
                    <h3>can you divide your number by 3 without remainder?</h3>
                    <button className='bu' onClick={()=>{set(setDivideByThree,setAfter_ByThree)}}>Yes</button>
                    <button className='bu' onClick={()=>{set(setDivideByThree,setDivideByTwo)}}>No</button>
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
                <button className='bu' onClick={()=>{set(setAfter_ByThree,setDidnt_ByTwoAfterThree)}}>Can't</button>
                <button className='bu' onClick={()=>{set(setAfter_ByThree,setByTwoAfterThree)}}>Done</button>
            </div>
        }
        else 
            return;
    }

    const done_ByTwoAfterThree = ()=>{
        if(byTwoAfterThree == true){
            return <div className='myDiv'>
                <h3>Now divide your number by 3 without remainder :</h3>
                <button className='bu' onClick={()=>{theNumber(10,setByTwoAfterThree)}}>Can't</button>
                <button className='bu' onClick={()=>{theNumber(4,setByTwoAfterThree)}}>Done</button>
            </div>
        }
    }

    const cannot_ByTwoAfterThree = ()=>{
        if(didnt_ByTwoAfterThree == true){
            return <div className='myDiv'>
                        <h3>Then add 1 to your number, and then divide it by 3 without remainder :</h3>
                        <button className='bu' onClick={()=>{theNumber(7,setDidnt_ByTwoAfterThree)}}>Can't divide</button>
                        <button className='bu' onClick={()=>{theNumber(1,setDidnt_ByTwoAfterThree)}}>Done</button>
                    </div>
        }
        else 
            return;
    }

    const theNumber = (num,func)=>{
        alert(`the number you choosed is ${num}`);
        func(false);
        setFirstStep(true);
        return;
    }

    const divideByTwo_Step = ()=>{
        if(divideByTwo == true){
            return <div className='myDiv'>
                    <h3>So divide it by 2 without remainder</h3>
                    <button className='bu' onClick={()=>{set(setDivideByTwo,setAfter_ByTwo)}}>Done</button>
                    <button className='bu' onClick={()=>{set(setDivideByTwo,setDevideByEight)}}>Can't</button>
                </div>
        }
        else 
            return;
    }

    const afterDevideByTwo = ()=>{
        if(after_ByTwo == true){
            return <div className='myDiv'>
                <h3>Great! <br/>Now add to your number 3 and after that divide it by 4 without remainder :</h3>
                <button className='bu' onClick={()=>{theNumber(6,setAfter_ByTwo)}}>Done</button>
                <button className='bu' onClick={()=>{set(setAfter_ByTwo,setDidnt_ByFourAfterTwo)}}>Can't divide</button>
            </div>
        }
    }

    const cannot_ByFourAfterTwo = ()=>{
        if(didnt_ByFourAfterTwo == true){
            return <div className='myDiv'>
                <h3>So divide it by 7 without remainder :</h3>
                <button className='bu' onClick={()=>{theNumber(2,setDidnt_ByFourAfterTwo)}}>Done</button>
                <button className='bu' onClick={()=>{theNumber(8,setDidnt_ByFourAfterTwo)}}>Can't</button>
            </div>
        }
    }

    const devideByEight_Step = ()=>{
        if(devideByEight == true){
            return <div className='myDiv'>
                <h3>So add to your number 1,<br/> and then divide it by 8 without remainder :</h3>
                <button className='bu' onClick={()=>{theNumber(3,setDevideByEight)}}>Done</button>
                <button className='bu' onClick={()=>{set(setDevideByEight,setDidnt_ByEight)}}>Can't divide</button>
            </div>
        }
    }

    const cannot_ByEight = ()=>{
        if(didnt_ByEight == true){
            return <div className='myDiv'>
                <h3>So divide it by 10 without remainder :</h3>
                <button className='bu' onClick={()=>{theNumber(9,setDidnt_ByEight)}}>Done</button>
                <button className='bu' onClick={()=>{theNumber(5,setDidnt_ByEight)}}>Can't</button>
            </div>
        }
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
            <br/><br/>
            {stepOne()}
            {nextStep()}
            {divideByThree_Step()}
            {afterDivideByThree()}
            {done_ByTwoAfterThree()}
            {cannot_ByTwoAfterThree()}
            {divideByTwo_Step()}
            {afterDevideByTwo()}
            {cannot_ByFourAfterTwo()}
            {devideByEight_Step()}
            {cannot_ByEight()}
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import {data} from './data';
import './Style.css'

 function QuizApp() {
    let[index,setIndex]=useState(0);
    let[finish,setFinish]=useState(false);
    let[option,setOption]=useState('');
    let[score,setScore]=useState(0)
    const correctOptions=['Option2','Option3','Option1','Option1','Option2','Option2','Option2','Option2','Option2','Option2']
    function updateIndex(){
         if(correctOptions[index]==option)
            {
                setScore(score+1);
            }
        if(index<data.length-1){  
            setIndex(index+1)
        setOption('');
        }
        else{
            setFinish(true)}
    }
    function selectedOption(opt){
        setOption(opt)
    }
    if(finish && score>5){
        return(<div className='scorePage'>
            <h1>Quiz if finished</h1>
            <h1>Youre score is {score} congratualations</h1>
        </div>) }
   if(finish && score<=5)
   {
    return(<div className='scorePage'>
            <h1>Quiz if finished</h1>
            <h1>Youre score is {score} better luck</h1>
        </div>) 
   }
  return (<div className='quiz'>
        <h3>{data[index].Question}</h3>
        <ul>
        <li className={option=='Option1'?'selected':''} onClick={()=>selectedOption('Option1')}>{data[index].Option1}</li>
        <li  className={option=='Option2'?'selected':''} onClick={()=>selectedOption('Option2')}>{data[index].Option2}</li>
        <li  className={option=='Option3'?'selected':''} onClick={()=>selectedOption('Option3')}>{data[index].Option3}</li>
        <li  className={option=='Option4'?'selected':''} onClick={()=>selectedOption('Option4')}>{data[index].Option4}</li>
        </ul>
        <button onClick={updateIndex}>Next</button>
        <h6>Question {index+1} of {data.length}</h6>
    </div> )}
export default QuizApp;
